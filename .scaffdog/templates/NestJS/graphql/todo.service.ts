import { title } from 'process'
import { Injectable, NotFoundException } from '@nestjs/common'
import { {{ inputs.query | pascal }} } from './models/{{ inputs.query }}'

@Injectable()
export class {{ inputs.query | pascal }}Service {
  // 今回はDBと接続しないのでメモリ上に{{ inputs.query | pascal }}を保存します。
  private {{ inputs.query }}s: {{ inputs.query | pascal }}[] = [{ id: '5', title: title, description: 'moge' }]

  // 全件取得のメソッド
  findAll(): {{ inputs.query | pascal }}[] {
    return this.{{ inputs.query }}s
  }
  // idを元に一件取得のメソッド
  findOneById(id: string): {{ inputs.query | pascal }} {
    const result = this.{{ inputs.query }}s.find({{ inputs.query }} => id === {{ inputs.query }}.id)
    if (!result) {
      // なかったら404エラーを返す。ビルトインのエラーも豊富にあってエラー処理も結構楽
      // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      throw new NotFoundException()
    }
    return result
  }
}
