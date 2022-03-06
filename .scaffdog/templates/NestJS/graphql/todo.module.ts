import { Module } from '@nestjs/common'
import { {{ inputs.query | pascal }}Resolver } from './{{ inputs.query }}.resolver'
import { {{ inputs.query | pascal }}Service } from './{{ inputs.query }}.service'

@Module({
  providers: [{{ inputs.query | pascal }}Service, {{ inputs.query | pascal }}Resolver],
})
export class {{ inputs.query | pascal }}Module {}
