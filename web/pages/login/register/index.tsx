import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormMail } from '@/organisms/Form/FormMail'
import { loginPageRedirectTo } from '@/services/helpers/ssrProps/loginPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { CenterBox } from '@/templates/CenterBox'
import { UnauthHeader } from '@/templates/UnauthLayout'

export const Register: NextPageWithLayout = () => {
  return (
    <Animation>
      <CenterBox>
        <FormMail mailFormType="signUp" />
      </CenterBox>
    </Animation>
  )
}

Register.getLayout = (page: ReactElement) => {
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

export default Register
