import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Send } from '@mui/icons-material'
import { FC } from 'react'
import { Note } from '@/atoms/Button/Note'
import { Heading } from '@/atoms/Text/Heading'
import { Summary } from '@/templates/Summary'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const SummaryRequest: FC<PropTypes> = ({ _css }) => {
  const HeaderIcon = <Send css={styles.icon} />

  return (
    <Summary>
      <Heading icon={HeaderIcon} underline link="here">
        申請状況
      </Heading>
      <div>
        <div>
          <span>直近5件の承認申請が表示されます。</span>
          <Note>もっと見るにはクリック！</Note>
        </div>
      </div>
    </Summary>
  )
}
const styles = {
  icon: css`
    color: ${themes.palette.text.secondary};
  `,
}
