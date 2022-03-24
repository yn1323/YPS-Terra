import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Google, Person } from '@mui/icons-material'
import { FC } from 'react'
import { Button } from '@/atoms/Button/Button'
import { useLogIn } from '@/hooks/useLogIn'
import { FormLoginInput } from '@/molecules/Form/FormLoginInput'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormLogin: FC<PropTypes> = ({ _css }) => {
  const { signIn } = useLogIn()
  return (
    <div css={[_css, styles.container]}>
      <p>Login with...</p>
      <div css={styles.buttons}>
        <Button
          _css={styles.button}
          variant="outlined"
          onClick={() => signIn('google')}
          endIcon={<Google />}
        >
          Google
        </Button>
        <Button
          _css={styles.button}
          variant="outlined"
          onClick={() => {
            signIn('anonymously')
          }}
          endIcon={<Person />}
        >
          Anonymously
        </Button>
        <FormLoginInput />
      </div>
    </div>
  )
}
const styles = {
  container: css``,
  buttons: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  button: css`
    width: 200px;
    margin: 10px 0;
    padding-right: 40px;
    padding-left: 40px;
    display: flex;
    justify-content: space-between;
  `,
}
