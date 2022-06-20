import { Text } from '@chakra-ui/react'
import type { NextPageWithLayout } from 'next'
import { ReactElement, useEffect } from 'react'
import { useLogout } from '@/hooks/useLogout'
import { Animation } from '@/templates/Animation'
import { CenterBox } from '@/templates/CenterBox'
import { UnauthHeader } from '@/templates/UnauthLayout'

export const Logout: NextPageWithLayout = () => {
  const { logout } = useLogout()
  useEffect(() => {
    logout()
  }, [logout])
  return (
    <Animation>
      <CenterBox>
        <Text>ログアウト中...</Text>
      </CenterBox>
    </Animation>
  )
}

Logout.getLayout = (page: ReactElement) => {
  return <UnauthHeader showLoginButton={false}>{page}</UnauthHeader>
}

export default Logout
