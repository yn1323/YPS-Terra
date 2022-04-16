import { getErrorCode } from 'services/helpers/common/getErrorCode'
import { useRegisterUserMutation } from '@/graphql/generated'

export const useRegisterUser = () => {
  const [registerUserMutation, { loading, error }] = useRegisterUserMutation()
  return {
    registerUserMutation,
    loading,
    error: getErrorCode(error) !== 200,
  }
}
