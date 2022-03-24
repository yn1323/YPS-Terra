import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormLogin } from '@/organisms/Form/FormLogin'
import { Layout } from '@/templates/Layout'

export const Login: NextPageWithLayout = () => {
  return <FormLogin />
}

Login.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Login
