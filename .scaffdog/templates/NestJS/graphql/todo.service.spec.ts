import { Test, TestingModule } from '@nestjs/testing'
import { {{ inputs.query | pascal }}Service } from './{{ inputs.query }}.service'

describe('{{ inputs.query | pascal }}Service', () => {
  let service: {{ inputs.query | pascal }}Service

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{{ inputs.query | pascal }}Service],
    }).compile()

    service = module.get<{{ inputs.query | pascal }}Service>({{ inputs.query | pascal }}Service)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
