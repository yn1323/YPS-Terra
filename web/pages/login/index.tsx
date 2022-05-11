import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormLogin } from '@/organisms/Form/FormLogin'
import { loginPageRedirectTo } from '@/services/helpers/ssrProps/loginPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { CenterBox } from '@/templates/CenterBox'
import { UnauthHeader } from '@/templates/UnauthLayout'

export const Login: NextPageWithLayout = () => {
  return (
    <Animation>
      <CenterBox>
        <FormLogin mailFormType="login" />
      </CenterBox>
    </Animation>
  )
}

Login.getLayout = (page: ReactElement) => {
  return <UnauthHeader showLoginButton={false}>{page}</UnauthHeader>
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
