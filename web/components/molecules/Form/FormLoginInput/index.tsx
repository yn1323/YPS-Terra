import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import Link from 'next/link'
import { FC, useRef, useState } from 'react'
import { Button } from '@/atoms/Button/Button'
import { Textbox } from '@/atoms/Input/Textbox'
import { FORM_ERROR_TEXT } from '@/constants/validations'
import { useLogIn } from '@/hooks/useLogIn'
import { mediaQueries } from '@/ui/mixins/breakpoint'

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

  const handleSignIn = () => {
    if (!checkError) return
    signIn('mail', {
      email: mailRef.current?.value ?? '',
      password: passwordRef.current?.value ?? '',
    })
  }

  const handleSignUp = () => {
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
    <div css={[_css, styles.container]}>
      <div css={styles.input}>
        <Textbox
          type="mail"
          ref={mailRef}
          required
          helperText={FORM_ERROR_TEXT.EMAIL}
          error={error.mail}
          placeholder="Eメール"
        />
      </div>
      <div css={styles.input}>
        <Textbox
          type="password"
          ref={passwordRef}
          required
          helperText={FORM_ERROR_TEXT.PASSWORD}
          error={error.password}
          placeholder="パスワード"
        />
      </div>

      <div css={styles.submit}>
        {!isSignUp ? (
          <Button onClick={handleSignIn} _css={styles.button}>
            ログイン
          </Button>
        ) : (
          <Button onClick={handleSignUp} _css={styles.button}>
            登録
          </Button>
        )}
      </div>

      {!isSignUp && (
        <div css={styles.emailSubText}>
          <Link href="/login/register">
            <a>新規登録</a>
          </Link>
          <span onClick={refresh}>パスワードをお忘れの方</span>
        </div>
      )}
      {isSignUp && (
        <div css={styles.emailSubText}>
          <Link href="/login">
            <a>ログイン画面に戻る</a>
          </Link>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    ${mediaQueries('sm')} {
      width: 360px;
    }
  `,
  input: css`
    margin: 20px 0;
  `,
  submit: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,
  button: css`
    width: 220px;
  `,
  emailSubText: css`
    margin-top: 20px;
    text-align: right;
    display: flex;
    flex-direction: column;

    > * {
      font-size: 0.9rem;
      margin: 10px 0;
      cursor: pointer;
      text-decoration: underline;
      color: #666;
    }
  `,
}
