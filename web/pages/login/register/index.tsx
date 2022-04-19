import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormSignup } from '@/organisms/Form/FormSignup'
import { loginPageRedirectTo } from '@/services/helpers/ssrProps/loginPageRedirectTo'
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

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await loginPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  return {
    props: {},
  }
}

export default Register
