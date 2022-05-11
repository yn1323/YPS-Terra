import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { showToast } from '@/localHelpers/ui'
import { pageMessage } from '@/recoil/pageMessage'
import { loginInfo } from '@/services/auth/loginInfo'
import { authPageRedirectTo } from '@/services/helpers/ssrProps/authPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { AuthLayout } from '@/templates/AuthLayout'

export const Dashboard: NextPageWithLayout = () => {
  const [pageMessages, setPageMessages] = useRecoilState(pageMessage)
  useEffect(() => {
    if (pageMessages.registerSucceeded) {
      showToast({ title: '登録が完了しました', status: 'success' })
      setPageMessages({ ...pageMessages, registerSucceeded: false })
    }
  }, [pageMessages, setPageMessages])

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
