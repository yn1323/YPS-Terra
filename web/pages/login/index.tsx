import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
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

export default Login
