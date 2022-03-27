import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormSignup } from '@/organisms/Form/FormSignup'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

export const Register: NextPageWithLayout = ({}) => {
  return (
    <Animation>
      <FormSignup />
    </Animation>
  )
}

Register.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Register
