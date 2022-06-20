import { Button, Text } from '@chakra-ui/react'
import type { GetServerSideProps, NextPageWithLayout } from 'next'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Animation } from '@/templates/Animation'
import { CenterBox } from '@/templates/CenterBox'
import { UnauthHeader } from '@/templates/UnauthLayout'

const MESSAGES = {
  '0001': '店舗が存在しません。再度URLをご確認ください',
} as const

type PropTypes = {
  msg: keyof typeof MESSAGES
}

export const Register: NextPageWithLayout<PropTypes> = ({ msg }) => {
  return (
    <Animation>
      <CenterBox>
        <Text mb={12}>{MESSAGES[msg]}</Text>
        <Link href="/" passHref>
          <Button as="a" colorScheme="primary">
            TOPへ戻る
          </Button>
        </Link>
      </CenterBox>
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
  const { msg = '' } = context.query

  return {
    props: {
      msg,
    },
  }
}

export default Register
