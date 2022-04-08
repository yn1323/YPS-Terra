import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  definition: string
  children: JSX.Element
  position?: 'center' | 'bottom'
}

export const Form: FC<PropTypes> = ({
  _css,
  definition,
  position = 'center',
  children,
}) => {
  return (
    <div css={[_css, styles.container]}>
      <div css={styles.titleWrapper}>
        <div
          css={[
            styles.title,
            styles,
            position === 'center' && styles.titlePosittionCenter,
          ]}
        >
          {definition}
        </div>
      </div>
      {children}
    </div>
  )
}
const styles = {
  container: css`
    ${mediaQueries('md')} {
      display: flex;
      justify-content: flex-start;
    }
  `,
  titleWrapper: css`
    display: flex;
    align-items: center;
    width: 180px;
  `,
  title: css`
    width: 240px;
    padding-top: 0.8rem;
  `,
  titlePosittionCenter: css`
    padding-top: 0;
  `,
}
