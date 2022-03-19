import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { SubscribeShopModule } from './SubscribeShop/index.module'
import { AuthGurd } from '@/gurds/AuthGurd'
import { CreateShopModule } from '@/modules/CreateShop/index.module'
import { ReadShopModule } from '@/modules/ReadShop/index.module'

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGurd }],
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
      context: ({ req, res }) => ({ req, res }),
    }),
  ],
})
export class AppModule {}
