import { useEffect, useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { useRegisterUserMutation } from '@/graphql/generated'
import { pageMessage } from '@/recoil/pageMessage'
import { getErrorCode } from '@/services/helpers/common/getErrorCode'

export const useRegisterUser = () => {
  const [registerUserMutation, { loading, error, data }] =
    useRegisterUserMutation()
  const [errorCode, setErrorCode] = useState(200)
  const [errorMessage, setErrorMessage] = useState('')
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

  useEffect(() => {
    if (errorCode === 404) {
      setErrorMessage(
        '対象の店舗または、ユーザーが存在しません。\nURLに誤りがないか確認してください。'
      )
    }
  }, [errorCode])

  return {
    registerUserMutation,
    loading,
    mutationSucceeded: !!data,
    error: errorCode !== 200,
    errorMessage,
  }
}
