import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Today } from '@mui/icons-material'
import { Avatar, Typography } from '@mui/material'
import { FC } from 'react'
import { Heading } from '@/atoms/Text/Heading'
import { Summary } from '@/templates/Summary'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  month: string
  name: string
  time: number
  imageUrl: string
}

export const SummaryWorkTime: FC<PropTypes> = ({
  _css,
  month,
  name,
  time,
  imageUrl,
}) => {
  const title = `${month}月の勤務状況`
  const info = `${name}さんの${month}月の勤務時間は、${time}時間です。`

  const HeaderIcon = <Today css={styles.icon} />

  return (
    <Summary css={_css}>
      <Heading icon={HeaderIcon} underline>
        {title}
      </Heading>
      <div css={styles.description}>
        <Avatar css={styles.avatar} alt={name} src={imageUrl} />
        <Typography variant="body1">{info}</Typography>
      </div>
    </Summary>
  )
}
const styles = {
  icon: css`
    color: ${themes.palette.text.secondary};
  `,
  description: css`
    display: flex;
    align-items: center;
  `,
  avatar: css`
    margin-right: 8px;
  `,
}
