import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { showToast } from '@/localHelpers/ui'
import { pageMessage } from '@/recoil/pageMessage'
import { loginInfo } from '@/services/auth/loginInfo'
import { authPageRedirectTo } from '@/services/helpers/ssrProps/authPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { AuthLayout } from '@/templates/AuthLayout'

export const Dashboard: NextPageWithLayout = () => {
  const { registerSucceeded } = useRecoilValue(pageMessage)
  useEffect(() => {
    if (registerSucceeded) {
      showToast({ title: '登録が完了しました', status: 'success' })
    }
  }, [registerSucceeded])

  return (
    <Animation>
      <div>dashboard</div>
    </Animation>
  )
}

Dashboard.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const [redirect, info] = await Promise.all([
    await authPageRedirectTo(context),
    await loginInfo(context),
  ])
  if (redirect) {
    return redirect
  }

  return {
    props: {},
  }
}

export default Dashboard
