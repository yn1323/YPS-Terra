import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormRegisterUser } from '@/organisms/Form/FormRegisterUser'
import { registerPageRedirectTo } from '@/services/ssrProps/registerPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

type PropTypes = {
  shopId: string
}

export const Register: NextPageWithLayout<PropTypes> = ({ shopId }) => {
  return (
    <Animation>
      {shopId ? (
        <FormRegisterUser targetShopId={shopId} />
      ) : (
        <FormRegisterUser targetShopId={shopId} />
      )}
    </Animation>
  )
}

Register.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await registerPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  const { shopId } = context.query

  return {
    props: {
      shopId,
    },
  }
}

export default Register
