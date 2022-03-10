import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Divider, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import { FC } from 'react'
import { MenuItem as MenuItemType } from '@/ui/layout/menu'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  items: MenuItemType[]
  delimeterPosition?: number[]
}

export const ListMenu: FC<PropTypes> = ({ items, delimeterPosition = [] }) => {
  const MenuItems = items.reduce(
    (acc: JSX.Element[], { icon, label, link }, i) => {
      acc.push(
        <MenuItem onClick={close} key={acc.length + 1}>
          <ListItemIcon css={styles.icon}>{icon}</ListItemIcon>
          <ListItemText css={styles.text} primary={label} disableTypography />
          {delimeterPosition.includes(i) && <Divider css={styles.divider} />}
        </MenuItem>
      )
      if (delimeterPosition.includes(i)) {
        acc.push(<Divider css={styles.divider} key={acc.length + 1} />)
      }
      return acc
    },
    []
  )

  return <>{MenuItems}</>
}
const styles = {
  text: css`
    color: ${themes.palette.text.secondary};
    margin: 0;
    font-size: 14px;
  `,
  divider: css`
    margin: 0 8px !important;
  `,
  icon: css`
    color: ${themes.palette.text.secondary};
    min-width: 2rem;
  `,
}
