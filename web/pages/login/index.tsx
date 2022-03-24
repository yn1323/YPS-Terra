import type { NextPage } from 'next'
import { FormLogin } from '@/organisms/Form/FormLogin'
import { Layout } from '@/templates/Layout'

export const Login: NextPage = () => {
  return (
    <Layout>
      <FormLogin />
    </Layout>
  )
}

export default Login
