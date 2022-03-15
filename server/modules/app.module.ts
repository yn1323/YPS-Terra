import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { RegisterShopModule } from '@/modules/registerShop/index.module'
import { TodoModule } from '@/modules/todo/index.module'

@Module({
  imports: [
    TodoModule,
    RegisterShopModule,
    // For env
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema/schema.gql'),
      installSubscriptionHandlers: true,
      sortSchema: true,
      debug: true,
      playground: true,
    }),
  ],
})
export class AppModule {}
