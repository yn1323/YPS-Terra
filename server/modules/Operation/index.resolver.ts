import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Operation } from '@/models/Operation'
import {
  GetOperationsArgs,
  CreateOperationsArgs,
} from '@/modules/Operation/args'
import { OperationService } from '@/modules/Operation/index.service'

@Resolver(of => Operation)
export class OperationResolver {
  constructor(private operationService: OperationService) {}

  @Query(returns => [Operation], { name: 'operations' })
  getOperations(@Args() args: GetOperationsArgs) {
    return this.operationService.findAllByShopId(args)
  }

  @Mutation(returns => [Operation], { name: 'operations' })
  createOperations(@Args() args: CreateOperationsArgs) {
    return this.operationService.createOperations(args)
  }
}
