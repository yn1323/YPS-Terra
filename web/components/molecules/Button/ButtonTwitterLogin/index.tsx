import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Twitter } from '@mui/icons-material'
import { FC } from 'react'
import { Button } from '@/atoms/Button/Button'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  loading?: boolean
  signIn: () => void
}

export const ButtonTwitterLogin: FC<PropTypes> = ({
  _css,
  loading = false,
  signIn,
}) => {
  return (
    <div css={_css}>
      <Button
        _css={styles.button}
        onClick={signIn}
        startIcon={<Twitter css={styles.icon} />}
        loading={loading}
      >
        Twitterでログイン
      </Button>
    </div>
  )
}
const styles = {
  button: css`
    width: 220px;
    text-transform: 'none';
    background: #00acee;
    &:hover {
      background: #00b6f1;
    }
  `,
  icon: css`
    color: white;
  `,
}
