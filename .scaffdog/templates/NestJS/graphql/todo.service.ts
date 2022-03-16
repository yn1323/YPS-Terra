import { title } from 'process'
import { Injectable, NotFoundException } from '@nestjs/common'
import { {{ inputs.query | pascal }}Args } from '@/modules/{{ inputs.query }}/index.resolver'
import { {{ inputs.query | pascal }} } from '@/models/{{ inputs.query }}'

@Injectable()
export class {{ inputs.query | pascal }}Service {
  async findAll(): {{ inputs.query | pascal }}[] {
    return this.{{ inputs.query }}s
  }
  async findOneById({id} : {{ inputs.query | pascal }}Args) {
    const result = this.{{ inputs.query }}s.find({{ inputs.query }} => id === {{ inputs.query }}.id)
    if (!result) {
      // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      throw new NotFoundException()
    }
    return result
  }
}
