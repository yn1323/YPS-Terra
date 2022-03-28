import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  links: {
    text: string
    url: string
    rel: string
  }[]
}

export const SlashLink: FC<PropTypes> = ({ _css, links }) => {
  return (
    <div css={[styles.container, _css]}>
      {links.map(({ url, rel, text }, i) => (
        <a css={styles.link} href={url} rel={rel} key={i}>
          {text}
        </a>
      ))}
    </div>
  )
}
const styles = {
  container: css`
    font-size: 0.85rem;
    margin: 0 4px;
    color: ${themes.palette.text.primary};
  `,
  link: css`
    color: ${themes.palette.text.primary};
    position: relative;
    margin: 0 16px;
    &:not(:first-of-type):before {
      content: '/';
      position: absolute;
      left: -1rem;
    }
  `,
}
