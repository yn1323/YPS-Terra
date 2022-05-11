import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { GraphQLModule } from '@nestjs/graphql'
import { AuthGurd } from '@/gurds/AuthGurd'
import { AnnounceModule } from '@/modules/Announce/index.module'
import { DevOnlyModule } from '@/modules/DevOnly/index.module'
import { OperationModule } from '@/modules/Operation/index.module'
import { OrganizationModule } from '@/modules/Organization/index.module'
import { RequestModule } from '@/modules/Request/index.module'
import { RequestConditionModule } from '@/modules/RequestCondition/index.module'
import { ShiftModule } from '@/modules/Shift/index.module'
import { ShopModule } from '@/modules/Shop/index.module'
import { TemporaryClosedModule } from '@/modules/TemporaryClosed/index.module'
import { TimeCardModule } from '@/modules/TimeCard/index.module'
import { UserModule } from '@/modules/User/index.module'

@Module({
  providers: [{ provide: APP_GUARD, useClass: AuthGurd }],
  imports: [
    ShopModule,
    OrganizationModule,
    UserModule,
    OperationModule,
    TemporaryClosedModule,
    AnnounceModule,
    ShiftModule,
    TimeCardModule,
    RequestModule,
    RequestConditionModule,
    DevOnlyModule,
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
