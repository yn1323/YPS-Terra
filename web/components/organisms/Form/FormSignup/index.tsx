import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { Heading } from '@/atoms/Text/Heading'
import { useLogIn } from '@/hooks/useLogIn'
import { FormLoginInput } from '@/molecules/Form/FormLoginInput'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormSignup: FC<PropTypes> = ({ _css }) => {
  const { signUp, refreshPassword, isLoading } = useLogIn()
  const router = useRouter()

  const handleSignUp = async (options?: Parameters<typeof signUp>[0]) => {
    const result = await signUp(options)
    if (result) {
      router.push('/register')
    }
  }

  const handleRefreshPassword = async (
    option: Parameters<typeof refreshPassword>[0]
  ) => {
    const result = await refreshPassword(option)
    // TODO: メール送信メッセージ表示
  }

  return (
    <div css={_css}>
      <Heading _css={styles.title} center underline variant="h1">
        登録
      </Heading>
      <div css={styles.container}>
        <FormLoginInput
          isSignUp
          loading={isLoading}
          signUp={({ email, password }: { email: string; password: string }) =>
            handleSignUp({ email, password })
          }
          refreshPassword={({ email }: { email: string }) =>
            handleRefreshPassword({ email })
          }
        />
      </div>
    </div>
  )
}
const styles = {
  container: css`
    display: flex;
    justify-content: center;
  `,
  title: css`
    margin-bottom: 40px;
  `,
}
