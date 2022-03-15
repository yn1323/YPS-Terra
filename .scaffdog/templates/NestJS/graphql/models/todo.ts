import { Field, ID, ObjectType } from '@nestjs/graphql'

// ObjectTypeデコレータを使用することで、定義したmodelを元にschemaが自動生成される
@ObjectType()
export class {{ inputs.query | pascal }} {
  // schame上、ID型にしたいため、ReturnTypeFuncを引数に与える
  // ReturnTypeFuncを引数に与えない場合、idの型はString型になる
  @Field(type => ID)
  id: string

  // ここはString型で良いのでReturnTypeFuncを引数に与えない
  @Field()
  title: string

  // nullを許容するためオプションを指定
  // オプションを指定しない限り、nullは許容されない（String!型になる）
  @Field({ nullable: true })
  description: string
}
