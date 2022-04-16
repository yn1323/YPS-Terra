import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Heading } from '@/atoms/Text/Heading'
import { useLogIn } from '@/hooks/useLogIn'
import { ButtonAnonymouslyLogin } from '@/molecules/Button/ButtonAnonymouslyLogin'
import { ButtonGoogleLogin } from '@/molecules/Button/ButtonGoogleLogin'
import { ButtonTwitterLogin } from '@/molecules/Button/ButtonTwitterLogin'
import { FormLoginInput } from '@/molecules/Form/FormLoginInput'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormLogin: FC<PropTypes> = ({ _css }) => {
  const { signIn, isLoading } = useLogIn()
  const router = useRouter()
  const {
    query: { shopId },
  } = router

  const handleSignIn = async (
    type: Parameters<typeof signIn>[0],
    options?: Parameters<typeof signIn>[1]
  ) => {
    const result = await signIn(type, options)
    if (result) {
      if (shopId) {
        router.push({ pathname: '/register', query: { shopId } })
      } else {
        router.push('/register')
      }
    }
  }

  return (
    <Box css={[_css, styles.container]}>
      <Heading _css={styles.title} center underline variant="h1">
        ログイン
      </Heading>
      <div css={styles.loginButtons}>
        <ButtonGoogleLogin
          _css={styles.loginButton}
          loading={isLoading}
          signIn={() => handleSignIn('google')}
        />
        <ButtonTwitterLogin
          _css={styles.loginButton}
          loading={isLoading}
          signIn={() => handleSignIn('twitter')}
        />
        <ButtonAnonymouslyLogin
          _css={styles.loginButton}
          loading={isLoading}
          signIn={() => handleSignIn('anonymously')}
        />
        <div css={styles.divider}>or</div>
        <FormLoginInput
          loading={isLoading}
          signIn={({ email, password }: { email: string; password: string }) =>
            handleSignIn('mail', { email, password })
          }
        />
      </div>
    </Box>
  )
}
const styles = {
  container: css`
    width: 100%;
  `,
  title: css`
    margin-bottom: 40px;
  `,
  divider: css`
    margin-top: 15px;
  `,
  loginButtons: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  loginButton: css`
    margin: 7px 0;
  `,
  button: css`
    width: 400px;
    margin: 10px 0;
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    justify-content: space-between;
  `,
}
