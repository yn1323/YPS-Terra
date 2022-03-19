import { Test, TestingModule } from '@nestjs/testing'
import { {{ inputs.query | pascal }}Resolver } from '@/modules/{{ inputs.query }}/index.resolver'

describe('{{ inputs.query | pascal }}Resolver', () => {
  let resolver: {{ inputs.query | pascal }}Resolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{{ inputs.query | pascal }}Resolver],
    }).compile()

    resolver = module.get<{{ inputs.query | pascal }}Resolver>({{ inputs.query | pascal }}Resolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
