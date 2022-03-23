import type { NextPage } from 'next'
import { useOnAuthStateChanged } from '@/hooks/useOnAuthStateChanged'
import { FormLogin } from '@/organisms/Form/FormLogin'
import { Layout } from '@/templates/Layout'

export const Login: NextPage = () => {
  useOnAuthStateChanged()
  return (
    <Layout>
      <FormLogin />
    </Layout>
  )
}

export default Login
