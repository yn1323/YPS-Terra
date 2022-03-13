import { Module } from '@nestjs/common'
import { TodoResolver } from '@/modules/todo/index.resolver'
import { TodoService } from '@/modules/todo/index.service'

@Module({
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
