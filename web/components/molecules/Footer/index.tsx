import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Typography } from '@mui/material'
import { FC } from 'react'
import { SlashLink } from '@/atoms/Text/SlashLink'
import { FOOTER_LINKS } from '@/ui/layout/footer'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const Footer: FC<PropTypes> = ({ _css }) => {
  return (
    <div css={[_css, styles.container]}>
      <div css={styles.urls}>
        <SlashLink links={FOOTER_LINKS} />
      </div>
      <Typography css={styles.copyRight} variant="caption">
        ©2021 YPS Team.
      </Typography>
    </div>
  )
}

const styles = {
  container: css`
    background: ${themes.palette.secondary.light};
    height: 64px;
    padding: 4px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  urls: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60%;
    width: 100%;
  `,
  copyRight: css`
    display: flex;
    justify-content: center;
    height: 40%;
    width: 100%;
  `,
}
