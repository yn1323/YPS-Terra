import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Container, Typography } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  isLoggedIn: boolean
}

export const HeaderTitle: FC<PropTypes> = ({ _css, children, isLoggedIn }) => {
  return (
    <Container css={[_css, styles.container(isLoggedIn)]}>
      <Image
        css={styles.logo}
        alt="logo"
        src="/images/logo.png"
        width={32}
        height={32}
      />
      <Typography css={styles.title} variant="h6">
        {children}
      </Typography>
    </Container>
  )
}
const styles = {
  container: (isLoggedIn: boolean) => css`
    display: flex;
    flex-grow: ${!isLoggedIn ? 1 : 0};
  `,
  title: css`
    margin-right: 48px;
    ${mediaQueries('sm')} {
      margin-left: 12px;
    }
  `,
  logo: css`
    margin-right: 8px;
  `,
}