import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { loginPageRedirectTo } from 'services/helpers/ssrProps/loginPageRedirectTo'
import { FormLogin } from '@/organisms/Form/FormLogin'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

export const Login: NextPageWithLayout = () => {
  return (
    <Animation>
      <FormLogin />
    </Animation>
  )
}

Login.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await loginPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  return {
    props: {},
  }
}

export default Login
