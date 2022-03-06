// src/app.module.ts
import { join } from 'path'
import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TodoModule } from './todo/todo.module'

@Module({
  imports: [
    TodoModule,
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
