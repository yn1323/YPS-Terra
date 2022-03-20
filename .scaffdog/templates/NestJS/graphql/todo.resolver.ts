import { Args,  Query, Resolver } from '@nestjs/graphql'
import { {{ inputs.query | pascal }} } from '@/models/{{ inputs.query }}'
import { {{ inputs.query | pascal }}Service } from '@/modules/{{ inputs.query | pascal }}/index.service'
import { Get{{ inputs.query | pascal }}Args } from '@/modules/{{ inputs.query | pascal }}/args'

@Resolver(of => {{ inputs.query | pascal }})
export class {{ inputs.query | pascal }}Resolver {
  constructor(private {{ inputs.query }}Service: {{ inputs.query | pascal }}Service) {}
  @Query(returns => [{{ inputs.query | pascal }}], { name: '{{ inputs.query}}' })
  findAll() {
    return this.{{ inputs.query }}Service.findAll()
  }
  @Query(returns => {{ inputs.query | pascal }}, { name: '{{ inputs.query }}' })
  findOneById(@Args() args: Get{{ inputs.query | pascal }}Args ) {
    return this.{{ inputs.query }}Service.findOneById(args)
  }
}
