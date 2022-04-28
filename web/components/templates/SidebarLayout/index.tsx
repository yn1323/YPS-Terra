import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Box, Drawer } from '@mui/material'
import { FC } from 'react'
import { MenuList } from '@/organisms/Header/MenuList'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  children: JSX.Element | JSX.Element[]
}

export const SidebarLayout: FC<PropTypes> = ({ _css, children }) => {
  const childComponents = Array.isArray(children) ? children : [children]

  return (
    <div css={[_css, styles.container]} data-testid="sidebar">
      <Drawer anchor="left" variant="permanent">
        <Box>
          <MenuList />
        </Box>
      </Drawer>
      <Box css={styles.main}>{childComponents}</Box>
    </div>
  )
}
const styles = {
  container: css``,
  main: css``,
}
