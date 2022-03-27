import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Link } from '@mui/icons-material'
import { Typography } from '@mui/material'
import type { TypographyProps } from '@mui/material'
import { FC } from 'react'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  variant: TypographyProps['variant']
  children: string | JSX.Element
  center?: boolean
  icon?: JSX.Element
  link?: string
  underline?: boolean
}

export const Heading: FC<PropTypes> = ({
  _css,
  children,
  center = false,
  icon,
  link,
  underline = false,
}) => {
  return (
    <>
      <div css={[styles.container, _css]} onClick={() => console.log(link)}>
        <div css={[styles.header, styles.centerize]}>
          {icon && <div css={[styles.icon, link && styles.link]}>{icon}</div>}
          <Typography css={[link && styles.link]}>{children}</Typography>
          {link && <Link css={[styles.linkIcon, link && styles.link]} />}
        </div>
      </div>
      {underline && <div css={styles.underline} />}
    </>
  )
}

const styles = {
  container: css`
    &:after {
      content: ' ';
      width: 100px;
      height: 2px;
      background-color: ${themes.palette.primary.main};
    }
  `,
  header: css`
    display: flex;
    align-items: center;
  `,
  centerize: css`
    justify-content: center;
  `,
  headerContainer: css`
    padding-left: 4px;
    padding-right: 48px;
    display: flex;
    align-items: center;
  `,
  icon: css`
    display: flex;
    align-items: center;
    padding-right: 10px;
  `,
  link: css`
    cursor: pointer;
  `,
  linkIcon: css`
    margin-left: 16px;
    color: ${themes.palette.text.secondary};
    height: 1.3rem;
    width: 1.3rem;
  `,
  underline: css`
    margin-top: 3px;
    margin-bottom: 20px;
    height: 2px;
    background-color: ${themes.palette.primary.main};
  `,
}
