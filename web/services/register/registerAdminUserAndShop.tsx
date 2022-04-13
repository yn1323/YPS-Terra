import { getErrorCode } from 'services/helpers/common/getErrorCode'
import { useRegisterAdminUserAndShopMutation } from '@/graphql/generated'

export const useRegisterAdminUserAndShop = () => {
  const [registerAdminUserAndShopMutation, { loading, error }] =
    useRegisterAdminUserAndShopMutation()
  return {
    registerAdminUserAndShopMutation,
    loading,
    error: getErrorCode(error) !== 200,
  }
}
