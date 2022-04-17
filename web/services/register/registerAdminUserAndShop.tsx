import { useRegisterAdminUserAndShopMutation } from '@/graphql/generated'
import { getErrorCode } from '@/services/helpers/common/getErrorCode'

export const useRegisterAdminUserAndShop = () => {
  const [registerAdminUserAndShopMutation, { loading, error, data }] =
    useRegisterAdminUserAndShopMutation()
  return {
    registerAdminUserAndShopMutation,
    loading,
    mutationSucceeded: !!data,
    error: getErrorCode(error) !== 200,
  }
}
