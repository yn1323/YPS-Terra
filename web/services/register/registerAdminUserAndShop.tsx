import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useRegisterAdminUserAndShopMutation } from '@/graphql/generated'
import { pageMessage } from '@/recoil/pageMessage'
import { getErrorCode } from '@/services/helpers/common/getErrorCode'

export const useRegisterAdminUserAndShop = () => {
  const [registerAdminUserAndShopMutation, { loading, error, data }] =
    useRegisterAdminUserAndShopMutation()
  const [errorCode, setErrorCode] = useState(200)
  const setMessage = useSetRecoilState(pageMessage)

  useEffect(() => {
    if (!!data) {
      setMessage({ registerSucceeded: true })
    }
  }, [setMessage, data])

  useEffect(() => {
    if (!loading) {
      setErrorCode(getErrorCode(error))
    } else {
      setErrorCode(200)
    }
  }, [loading, error, errorCode])

  return {
    registerAdminUserAndShopMutation,
    loading,
    mutationSucceeded: !!data,
    error: errorCode !== 200,
  }
}
