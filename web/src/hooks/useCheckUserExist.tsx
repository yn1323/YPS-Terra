import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { useGetUserLazyQuery } from '@/graphql/generated'
import { userInfoState } from '@/recoil/userInfo'

export const useCheckUserExist = () => {
  const { uid } = useRecoilValue(userInfoState)
  const [getUser, { loading, data }] = useGetUserLazyQuery({
    variables: { userId: uid },
  })
  useEffect(() => {
    if (uid) {
      getUser()
    }
  }, [uid, getUser])

  return {
    isValidating: loading,
    data,
  }
}
