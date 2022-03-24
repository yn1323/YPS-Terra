import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC, useRef, useState } from 'react'
import { Button } from '@/atoms/Button/Button'
import { Textbox } from '@/atoms/Input/Textbox'
import { FORM_ERROR_TEXT } from '@/constants/validations'
import { useLogIn } from '@/hooks/useLogIn'
import { useLogout } from '@/hooks/useLogout'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  isSignUp?: boolean
}

export const FormLoginInput: FC<PropTypes> = ({ _css, isSignUp = false }) => {
  const { signIn, signUp, refreshPassword } = useLogIn()
  const mailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState({ mail: false, password: false })

  const checkError = () => {
    const errors = {
      mail: mailRef.current?.value === '',
      password: passwordRef.current?.value === '',
    }
    setError(errors)
    return Object.values(errors).every(result => !result)
  }

  const submit = () => {
    if (!checkError) return
    signIn('mail', {
      email: mailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    })
  }

  const signup = () => {
    if (!checkError) return
    signUp({
      email: mailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    })
  }

  const refresh = () => {
    if (!checkError) return
    refreshPassword({
      email: mailRef.current?.value ?? '',
    })
  }

  return (
    <form css={[_css, styles.container]} data-testid="formlogininput">
      <div css={styles.input}>
        <Textbox
          type="mail"
          ref={mailRef}
          required
          helperText={FORM_ERROR_TEXT.EMAIL}
          error={error.mail}
          placeholder="Email"
        />
      </div>
      <div css={styles.input}>
        <Textbox
          type="password"
          ref={passwordRef}
          required
          helperText={FORM_ERROR_TEXT.PASSWORD}
          error={error.password}
          placeholder="Password"
        />
      </div>

      {!isSignUp && (
        <Button onClick={submit} _css={styles.button}>
          ログイン
        </Button>
      )}

      {isSignUp && (
        <Button onClick={signup} _css={styles.button}>
          登録
        </Button>
      )}

      {!isSignUp && (
        <Button onClick={refresh}>パスワードを忘れた方はこちら</Button>
      )}
    </form>
  )
}
const styles = {
  container: css`
    margin: 20px 0;
  `,
  input: css`
    margin: 20px 0;
  `,
  button: css`
    width: 100%;
  `,
}
