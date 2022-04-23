import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Button } from '@/atoms/Button/Button'
import { Heading } from '@/atoms/Text/Heading'
import { FORM_ERROR_TEXT } from '@/constants/validations'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { NotificationError } from '@/molecules/Notification/NotificationError'
import { userInfoState } from '@/recoil/userInfo'
import { useRegisterUser } from '@/services/register/registerUser'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  shopId: string
}

export const FormRegisterUser: FC<PropTypes> = ({ _css, shopId }) => {
  const {
    registerUserMutation,
    loading,
    error,
    errorMessage,
    mutationSucceeded,
  } = useRegisterUser()
  const { uid } = useRecoilValue(userInfoState)
  const userNameRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const [success, setSuccess] = useState({
    userName: true,
  })

  useEffect(() => {
    if (mutationSucceeded) {
      router.push('/dashboard')
    }
  }, [mutationSucceeded, router])

  const handleSubmit = () => {
    const targetValidation = [userNameRef.current?.value]

    const allSuccess = targetValidation?.every(v => v)
    if (!allSuccess) {
      setSuccess({
        userName: !!userNameRef.current?.value,
      })
    } else {
      registerUserMutation({
        variables: {
          userId: uid,
          shopId,
          userName: userNameRef.current?.value ?? '',
        },
      })
    }
  }

  return (
    <div css={[_css, styles.container]}>
      {error && (
        <NotificationError show={true}>{errorMessage}</NotificationError>
      )}

      <section css={styles.section}>
        <Heading underline>初期設定</Heading>
        <div css={styles.items}>
          <FormUserName
            error={!success.userName}
            helperText={FORM_ERROR_TEXT.USER_NAME}
            ref={userNameRef}
          />
        </div>
      </section>

      <div css={styles.submitButton}>
        <Button onClick={handleSubmit} loading={loading}>
          登録
        </Button>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
  `,
  section: css`
    margin-bottom: 32px;
    ${mediaQueries('sm')} {
      margin-bottom: 48px;
    }
  `,
  items: css`
    > * {
      margin: 24px 0;
      ${mediaQueries('sm')} {
        margin: 12px 0;
      }
    }
  `,
  description: css`
    margin-top: 4px;
    font-size: 0.8rem;
  `,
  submitButton: css`
    display: flex;
    justify-content: flex-end;
  `,
}