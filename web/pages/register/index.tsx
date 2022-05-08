import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormRegisterAdmin } from '@/organisms/Form/FormRegisterAdmin'
import { FormRegisterUser } from '@/organisms/Form/FormRegisterUser'
import { registerPageRedirectTo } from '@/services/helpers/ssrProps/registerPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { UnauthHeader } from '@/templates/UnauthLayout'

type PropTypes = {
  shopId: string
}

export const Register: NextPageWithLayout<PropTypes> = ({ shopId }) => {
  return (
    <Animation>
      {shopId ? <FormRegisterUser shopId={shopId} /> : <FormRegisterAdmin />}
    </Animation>
  )
}

Register.getLayout = (page: ReactElement) => {
  return <UnauthHeader showLoginButton={false}>{page}</UnauthHeader>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await registerPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  const { shopId = '' } = context.query

  return {
    props: {
      shopId,
    },
  }
}

export default Register
