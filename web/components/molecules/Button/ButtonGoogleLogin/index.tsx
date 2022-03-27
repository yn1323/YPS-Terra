import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import Image from 'next/image'
import { FC } from 'react'
import { Button } from '@/atoms/Button/Button'
import { useLogIn } from '@/hooks/useLogIn'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  loading?: boolean
}

const Icon = () => {
  return (
    <Image
      src="/images/icons/googleicon.png"
      width={18}
      height={18}
      alt="googlelogo"
    />
  )
}

export const ButtonGoogleLogin: FC<PropTypes> = ({ _css, loading = false }) => {
  const { signIn } = useLogIn()

  return (
    <div css={_css}>
      <Button
        _css={styles.button}
        onClick={() => signIn('twitter')}
        startIcon={<Icon />}
        loading={loading}
      >
        Googleでログイン
      </Button>
    </div>
  )
}
const styles = {
  button: css`
    width: 220px;

    text-transform: none;
    color: rgba(0, 0, 0, 0.54);
    background: #ffffff;
    &:hover {
      background: #fafafa;
    }
  `,
  icon: css`
    color: rgba(0, 0, 0, 1);
  `,
}
