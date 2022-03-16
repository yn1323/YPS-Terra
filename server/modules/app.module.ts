import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { ReadShopModule } from './ReadShop/index.module'
import { CreateShopModule } from '@/modules/CreateShop/index.module'

@Module({
  imports: [
    CreateShopModule,
    ReadShopModule,
    // For env
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
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
