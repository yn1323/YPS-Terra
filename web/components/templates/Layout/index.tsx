import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  children: JSX.Element
  _css?: SerializedStyles | SerializedStyles[]
}

export const Layout: FC<PropTypes> = ({ _css, children }) => {
  return (
    <div css={[_css, styles.container]}>
      <div css={styles.header}>header</div>
      <div css={styles.component}>{children}</div>
      {/* <Footer /> */}
    </div>
  )
}

const styles = {
  container: css`
    position: relative;
    min-height: calc(100vh - 3rem);
    ${mediaQueries('sm')} {
      min-height: calc(100vh - 4rem);
    }
  `,
  header: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  `,
  component: css`
    margin-top: 48px;
    padding-bottom: 56px;
    ${mediaQueries('sm')} {
      margin-top: 64px;
    }
  `,
}
