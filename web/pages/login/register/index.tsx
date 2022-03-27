import { css } from '@emotion/react'
import type { NextPageWithLayout } from 'next'
import { ReactElement } from 'react'
import { FormLoginInput } from '@/molecules/Form/FormLoginInput'
import { Animation } from '@/templates/Animation'
import { Center } from '@/templates/Center'
import { Layout } from '@/templates/Layout'
import { mediaQueries } from '@/ui/mixins/breakpoint'

export const Register: NextPageWithLayout = ({}) => {
  return (
    <Animation>
      <Center _css={styles.container}>
        <FormLoginInput isSignUp />
      </Center>
    </Animation>
  )
}

Register.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

const styles = {
  container: css`
    padding: 20px;
    ${mediaQueries('sm')} {
      padding-bottom: 300px;
    }
  `,
}

export default Register
