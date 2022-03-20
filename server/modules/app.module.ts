import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthGurd } from '@/gurds/AuthGurd'
import { ShopModule } from '@/modules/Shop/index.module'

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGurd }],
  imports: [
    ShopModule,
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
