import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { useRecoilValue } from 'recoil'
import { Snackbar } from '@/atoms/Text/Snackbar'
import { pageMessage } from '@/recoil/pageMessage'
import { loginInfo } from '@/services/auth/loginInfo'
import { authPageRedirectTo } from '@/services/helpers/ssrProps/authPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

export const Dashboard: NextPageWithLayout = () => {
  const { registerSucceeded } = useRecoilValue(pageMessage)

  return (
    <Animation>
      <Snackbar show={registerSucceeded}>登録が完了しました。</Snackbar>
      <div>dashboard</div>
    </Animation>
  )
}

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
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
