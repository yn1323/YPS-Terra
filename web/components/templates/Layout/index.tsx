import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { useOnAuthStateChanged } from '@/hooks/useOnAuthStateChanged'
import { Footer } from '@/molecules/Footer'
import { Header } from '@/organisms/Header/Header'
import { mediaQueries } from '@/ui/mixins/breakpoint'
import { themes } from '@/ui/theme'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
  _css?: SerializedStyles | SerializedStyles[]
}

export const Layout: FC<PropTypes> = ({ _css, children }) => {
  const childComponents = Array.isArray(children) ? children : [children]
  useOnAuthStateChanged()

  return (
    <div css={[_css, styles.container]}>
      <div css={styles.header}>
        <Header />
      </div>
      <div css={styles.wrapper}>
        <div css={styles.component}>{childComponents}</div>
      </div>
      <div css={styles.footer}>
        <Footer />
      </div>
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
  wrapper: css`
    margin-top: 48px;
    padding: 20px 15px;
    padding-bottom: 56px;
    ${mediaQueries('sm')} {
      padding-bottom: 56px;
      display: flex;
      justify-content: center;
    }
  `,
  component: css`
    ${mediaQueries('sm')} {
      width: ${themes.breakpoints.values.lg}px;
    }
  `,
  footer: css`
    width: 100%;
    position: absolute;
    bottom: 0;
    ${mediaQueries('sm')} {
      bottom: -14px;
    }
  `,
}
