import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Link } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { themes } from '@/ui/theme'

export type HeaderTypes = 'sub' | 'description'
const headerTypes = { sub: 'h2', description: 'subtitle1' } as const

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  children: string | JSX.Element
  type: HeaderTypes
  icon?: JSX.Element
  link?: string
  underline?: boolean
}

export const Heading: FC<PropTypes> = ({
  _css,
  children,
  type,
  underline,
  icon,
  link,
}) => {
  const variant = headerTypes[type]
  const headerCss = header[type]
  const underlineCss = underlines[type]

  return (
    <div css={[styles.container, _css]} onClick={() => console.log(link)}>
      {icon}
      <div css={styles.header}>
        <div css={styles.headerContainer}>
          <Typography css={headerCss} variant={variant}>
            {children}
          </Typography>
          {!!link && <Link css={styles.linkIcon} />}
        </div>
        <div>{underline && <div css={underlineCss} />}</div>
      </div>
    </div>
  )
}
const styles = {
  container: css`
    display: flex;
    align-items: center;
  `,
  header: css`
    display: inline-block;
  `,
  headerContainer: css`
    padding-left: 4px;
    padding-right: 48px;
    display: flex;
    align-items: center;
  `,
  linkIcon: css`
    margin-left: 16px;
    color: ${themes.palette.text.secondary};
    height: 1.3rem;
    width: 1.3rem;
  `,
}

const header = {
  sub: css`
    font-size: 1.6rem;
    color: ${themes.palette.text.primary};
  `,
  description: css`
    font-size: 0.8rem;
    color: ${themes.palette.text.primary};
  `,
}
const underlines = {
  sub: css`
    height: 2px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #da8d00d5,
      #ffa6006a,
      #ffa60018
    );
  `,
  description: css``,
}
