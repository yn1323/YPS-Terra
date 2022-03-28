import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Person } from '@mui/icons-material'
import { FC } from 'react'
import { Button } from '@/atoms/Button/Button'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  loading?: boolean
  signIn: () => void
}

export const ButtonAnonymouslyLogin: FC<PropTypes> = ({
  _css,
  loading = false,
  signIn,
}) => {
  return (
    <div css={_css}>
      <Button
        _css={styles.button}
        onClick={signIn}
        startIcon={<Person css={styles.icon} />}
        loading={loading}
      >
        ゲストでログイン
      </Button>
    </div>
  )
}

const styles = {
  button: css`
    width: 220px;

    text-transform: 'none';
    background: #43a047;
    &:hover {
      background: #4caf50;
    }
  `,
  icon: css`
    color: white;
  `,
}
