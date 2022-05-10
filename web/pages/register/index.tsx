import type { GetServerSideProps, NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { Shop } from '@/graphql/generated'
import { FormRegisterAdmin } from '@/organisms/Form/FormRegisterAdmin'
import { FormRegisterUser } from '@/organisms/Form/FormRegisterUser'
import { registerPageRedirectTo } from '@/services/helpers/ssrProps/registerPageRedirectTo'
import { getShopInfo } from '@/services/shop/getShopInfo'
import { Animation } from '@/templates/Animation'
import { UnauthHeader } from '@/templates/UnauthLayout'

type PropTypes = {
  shopId: string
  shopInfo: Shop
  isUserExist: boolean
}

export const Register: NextPageWithLayout<PropTypes> = ({
  shopId,
  shopInfo,
  isUserExist,
}) => {
  return (
    <Animation>
      {shopId ? (
        <FormRegisterUser
          shopId={shopId}
          shopInfo={shopInfo}
          isUserExist={isUserExist}
        />
      ) : (
        <FormRegisterAdmin />
      )}
    </Animation>
  )
}

Register.getLayout = (page: ReactElement) => {
  return (
    <UnauthHeader showLoginButton={false} showLogoutButton={true}>
      {page}
    </UnauthHeader>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { isUserExist, redirect } = await registerPageRedirectTo(context)
  if (redirect) {
    return redirect
  }

  const { shopId = '' } = context.query
  let shopInfo = {}
  if (shopId) {
    const { isShopExist, ...rest } = await getShopInfo(context)
    if (!isShopExist) {
      return {
        redirect: {
          destination: 'error?msg=0001',
          permanent: false,
        },
      }
    } else {
      shopInfo = rest.shopInfo.shop
    }
  }

  return {
    props: {
      shopId,
      shopInfo,
      isUserExist,
    },
  }
}

export default Register
