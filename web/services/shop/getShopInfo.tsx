import { GetServerSidePropsContext } from 'next'
import client from '@/config/apollo-client'
import { getShop } from '@/graphql/Shop/query'
import { Shop } from '@/graphql/generated'
import { ssrGqlCommon } from '@/services/helpers/common/ssrGqlCommon'

export const getShopInfo = async (context: GetServerSidePropsContext) => {
  const { data } = await client.query<{ shop: Shop }>({
    query: getShop,
    variables: { shopId: context.query.shopId },
    ...ssrGqlCommon(context),
  })

  return {
    shopInfo: data,
    isShopExist: !!data,
  }
}
