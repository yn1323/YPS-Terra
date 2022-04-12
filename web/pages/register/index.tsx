import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import client from '@/config/apollo-client'
import { registerAdmin } from '@/graphql/register/mutation'
import { getCookieValue } from '@/helpers/string'
import { FormRegisterAdmin } from '@/organisms/Form/FormRegisterAdmin'
import { FormRegisterUser } from '@/organisms/Form/FormRegisterUser'
import { ssrGqlCommon } from '@/services/common/ssrGqlCommon'
import { registerPageRedirectTo } from '@/services/ssrProps/registerPageRedirectTo'
import { Animation } from '@/templates/Animation'
import { Layout } from '@/templates/Layout'

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
  return <Layout>{page}</Layout>
}

export const getServerSideProps: GetServerSideProps = async context => {
  const redirect = await registerPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  const { data } = await client.query({
    query: registerAdmin,
    ...ssrGqlCommon(context),
  })
  console.log(data)

  const { shopId } = context.query

  return {
    props: {
      shopId,
    },
  }
}

export default Register
