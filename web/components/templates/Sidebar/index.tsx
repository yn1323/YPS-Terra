import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Box, Drawer } from '@mui/material'
import { FC, useState } from 'react'
import { MenuList } from '@/organisms/Header/MenuList'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const Sidebar: FC<PropTypes> = ({ _css }) => {
  const [isExtend, setIsExtend] = useState(true)
  const userName = 'aaa'
  const imagePath = ''

  return (
    <div css={[_css, styles.container]} data-testid="sidebar">
      <Drawer anchor="left" variant="permanent">
        <Box css={[isExtend && styles.drawer]}>
          <MenuList userName={userName} imagePath={imagePath} />
        </Box>
      </Drawer>
    </div>
  )
}
const styles = {
  container: css``,
  drawer: css`
    /* width: 200px; */
  `,
}
