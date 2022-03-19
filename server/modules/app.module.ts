import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { SubscribeShopModule } from './SubscribeShop/index.module'
import { CreateShopModule } from '@/modules/CreateShop/index.module'
import { ReadShopModule } from '@/modules/ReadShop/index.module'

@Module({
  imports: [
    CreateShopModule,
    ReadShopModule,
    SubscribeShopModule,
    // For env
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
        numberScalarMode: 'integer',
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
