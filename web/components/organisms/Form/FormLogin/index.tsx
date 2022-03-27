import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'
import { ButtonAnonymouslyLogin } from '@/molecules/Button/ButtonAnonymouslyLogin'
import { ButtonGoogleLogin } from '@/molecules/Button/ButtonGoogleLogin'
import { ButtonTwitterLogin } from '@/molecules/Button/ButtonTwitterLogin'
import { FormLoginInput } from '@/molecules/Form/FormLoginInput'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormLogin: FC<PropTypes> = ({ _css }) => {
  return (
    <Box css={[_css, styles.container]}>
      <Typography>ログイン</Typography>
      <div css={styles.loginButtons}>
        <ButtonGoogleLogin _css={styles.loginButton} />
        <ButtonTwitterLogin _css={styles.loginButton} />
        <ButtonAnonymouslyLogin _css={styles.loginButton} />
        <div css={styles.divider}>or</div>
        <FormLoginInput />
      </div>
    </Box>
  )
}
const styles = {
  container: css`
    width: 100%;
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
