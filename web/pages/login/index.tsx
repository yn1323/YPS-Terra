import { css } from '@emotion/react'
import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormLogin } from '@/organisms/Form/FormLogin'
import { Animation } from '@/templates/Animation'
import { Center } from '@/templates/Center'
import { Layout } from '@/templates/Layout'
import { mediaQueries } from '@/ui/mixins/breakpoint'

export const Login: NextPageWithLayout = () => {
  return (
    <Animation>
      <Center _css={styles.container}>
        <FormLogin />
      </Center>
    </Animation>
  )
}

Login.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
const styles = {
  container: css`
    ${mediaQueries('sm')} {
      padding-bottom: 200px;
    }
  `,
}

export default Login
