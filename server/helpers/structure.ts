import { Organization } from '@/models/Organization'
import { Shop } from '@/models/Shop'
import { StructureCombination } from '@/models/StructureCombination'
import { User } from '@/models/User'

type OrganizationAndShopCombination = {
  userId: string
  shops: Shop[]
  organizations: Organization[]
}
export const organizationAndShopCombination = ({
  userId,
  shops,
  organizations,
}: OrganizationAndShopCombination) => {
  const ret: StructureCombination[] = []

  const shopIdsInShops = shops.map(({ shopId }) => shopId)

  organizations.forEach(({ shopIds, organizationId }) => {
    shopIds.forEach(shopId => {
      if (shopIdsInShops.includes(shopId)) {
        ret.push({
          organizationId,
          shopId,
          userId,
        })
      }
    })
  })

  return ret
}

type GetGroupNamesArgs = {
  user: User
  shops: Shop[]
  organizations: Organization[]
}

export const getGroupNames = ({
  user,
  shops,
  organizations,
}: GetGroupNamesArgs) => {
  return {
    user: [{ id: user.userId, name: user.userName }],
    shop: shops.map(({ shopId, shopName }) => ({ id: shopId, name: shopName })),
    organization: organizations.map(({ organizationId, organizationName }) => ({
      id: organizationId,
      name: organizationName,
    })),
  }
}
