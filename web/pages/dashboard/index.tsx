import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { authPageRedirectTo } from '@/services/helpers/ssrProps/authPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

export const Dashboard: NextPageWithLayout = () => {
  return (
    <Animation>
      <div>dashboard</div>
    </Animation>
  )
}

Dashboard.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await authPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  return {
    props: {},
  }
}

export default Dashboard
