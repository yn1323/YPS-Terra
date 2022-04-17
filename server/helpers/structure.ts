import { Organization } from '@/models/Organization'
import { Shop } from '@/models/Shop'
import { StructureCombination } from '@/models/StructureCombination'

type OrganizationAndShopCombinationArgs = {
  userId: string
  shops: Shop[]
  organizations: Organization[]
}
export const organizationAndShopCombination = ({
  userId,
  shops,
  organizations,
}: OrganizationAndShopCombinationArgs) => {
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
