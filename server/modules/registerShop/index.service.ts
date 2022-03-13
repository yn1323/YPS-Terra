import { title } from 'process'
import { Injectable, NotFoundException } from '@nestjs/common'
import { RegisterShop } from '@/models/registerShop'

@Injectable()
export class RegisterShopService {
  // 今回はDBと接続しないのでメモリ上にRegisterShopを保存します。
  private registerShops: RegisterShop[] = [
    { id: '5', title: title, description: 'moge' },
  ]

  // 全件取得のメソッド
  findAll(): RegisterShop[] {
    return this.registerShops
  }
  // idを元に一件取得のメソッド
  findOneById(id: string): RegisterShop {
    const result = this.registerShops.find(
      registerShop => id === registerShop.id
    )
    if (!result) {
      // なかったら404エラーを返す。ビルトインのエラーも豊富にあってエラー処理も結構楽
      // https://docs.nestjs.com/exception-filters#built-in-http-exceptions
      throw new NotFoundException()
    }
    return result
  }
}
