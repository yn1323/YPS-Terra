import { Args, ID, Query, Resolver, ArgsType, Field } from '@nestjs/graphql'
import { {{ inputs.query | pascal }} } from '@/models/{{ inputs.query }}'
import { {{ inputs.query | pascal }}Service } from '@/modules/{{ inputs.query }}/index.service'

@ArgsType()
export class {{ inputs.query | pascal }}Args {
  @Field(type => ID)
  id: string
}

@Resolver(of => {{ inputs.query | pascal }})
export class {{ inputs.query | pascal }}Resolver {
  constructor(private {{ inputs.query }}Service: {{ inputs.query | pascal }}Service) {}
  @Query(returns => [{{ inputs.query | pascal }}], { nullable: 'items' })
  findAll() {
    return this.{{ inputs.query }}Service.findAll()
  }
  @Query(returns => {{ inputs.query | pascal }})
  findOneById(@Args()args: {{ inputs.query | pascal }}Args ) {
    return this.{{ inputs.query }}Service.findOneById(args)
  }
}
