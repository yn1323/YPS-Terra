import { Args, ID, Query, Resolver } from '@nestjs/graphql'
import { RegisterShop } from '@/models/registerShop'
import { RegisterShopService } from '@/modules/registerShop/index.service'

// Resolverデコレータでresolverを定義
// https://docs.nestjs.com/graphql/resolvers#code-first-resolver
@Resolver(of => RegisterShop)
export class RegisterShopResolver {
  constructor(private registerShopService: RegisterShopService) {}
  // QueryデコレータでQueryを定義
  // 第一引数にReturnTypeFuncを指定し、型を定義。ここではRegisterShopの配列を指定。
  // 第二引数にオプションとして{ nullable: 'items' }を与えることでから配列を許容する。[RegisterShop]!と同義。
  // デフォルトでは [RegisterShop!]! になる。
  @Query(() => [RegisterShop], { nullable: 'items' })
  findAll() {
    return this.registerShopService.findAll()
  }

  @Query(() => RegisterShop)
  // Queryに引数がある場合はArgsデコレータで定義。
  // 第一引数に引数の名前、第二引数に型を指定。
  // schema上の型定義は findOneById(id: ID!): RegisterShop! となる
  findOneById(@Args('id', { type: () => ID }) id: string) {
    return this.registerShopService.findOneById(id)
  }
}
