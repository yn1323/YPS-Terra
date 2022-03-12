import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { LibraryBooks } from '@mui/icons-material'
import { FC } from 'react'
import { Heading } from '@/atoms/Text/Heading'
import { Summary } from '@/templates/Summary'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const SummaryShift: FC<PropTypes> = ({ _css }) => {
  const HeaderIcon = <LibraryBooks css={styles.icon} />

  return (
    <Summary>
      <Heading type="sub" icon={HeaderIcon} underline link="here">
        直近のシフト
      </Heading>
      <div></div>
    </Summary>
  )
}
const styles = {
  icon: css`
    color: ${themes.palette.text.secondary};
  `,
}
