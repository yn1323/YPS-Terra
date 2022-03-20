import { Module } from '@nestjs/common'
import { {{ inputs.query | pascal }}Resolver } from '@/modules/{{ inputs.query | pascal }}/index.resolver'
import { {{ inputs.query | pascal }}Service } from '@/modules/{{ inputs.query | pascal }}/index.service'

@Module({
  providers: [{{ inputs.query | pascal }}Service, {{ inputs.query | pascal }}Resolver],
})
export class {{ inputs.query | pascal }}Module {}
