import { getErrorCode } from 'services/helpers/common/getErrorCode'
import { useRegisterUserMutation } from '@/graphql/generated'

export const useRegisterUser = () => {
  const [registerUserMutation, { loading, error, data }] =
    useRegisterUserMutation()
  return {
    registerUserMutation,
    loading,
    mutationSucceeded: !!data,
    error: getErrorCode(error) !== 200,
  }
}
