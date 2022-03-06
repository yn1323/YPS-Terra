import { Args, ID, Query, Resolver } from '@nestjs/graphql'
import { {{ inputs.query | pascal }} } from './models/{{ inputs.query }}'
import { {{ inputs.query | pascal }}Service } from './{{ inputs.query }}.service'

// Resolverデコレータでresolverを定義
// https://docs.nestjs.com/graphql/resolvers#code-first-resolver
@Resolver(of => {{ inputs.query | pascal }})
export class {{ inputs.query | pascal }}Resolver {
  constructor(private {{ inputs.query }}Service: {{ inputs.query | pascal }}Service) {}
  // QueryデコレータでQueryを定義
  // 第一引数にReturnTypeFuncを指定し、型を定義。ここでは{{ inputs.query | pascal }}の配列を指定。
  // 第二引数にオプションとして{ nullable: 'items' }を与えることでから配列を許容する。[{{ inputs.query | pascal }}]!と同義。
  // デフォルトでは [{{ inputs.query | pascal }}!]! になる。
  @Query(() => [{{ inputs.query | pascal }}], { nullable: 'items' })
  findAll() {
    return this.{{ inputs.query }}Service.findAll()
  }

  @Query(() => {{ inputs.query | pascal }})
  // Queryに引数がある場合はArgsデコレータで定義。
  // 第一引数に引数の名前、第二引数に型を指定。
  // schema上の型定義は findOneById(id: ID!): {{ inputs.query | pascal }}! となる
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.{{ inputs.query }}Service.findOneById(id)
  }
}
