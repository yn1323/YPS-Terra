import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Divider, ListItemIcon, ListItemText, MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useLogout } from '@/hooks/useLogout'
import { MenuItem as MenuItemType } from '@/ui/layout/menu'
import { themes } from '@/ui/theme'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  items: MenuItemType[]
  delimeterPosition?: number[]
  close: () => void
}

export const ListMenu: FC<PropTypes> = ({
  _css,
  items,
  delimeterPosition = [],
  close,
}) => {
  const router = useRouter()
  const { singOut } = useLogout()
  const routeTo = (link: string) => {
    if (link === '/logout') {
      singOut()
      router.push('/')
    } else {
      router.push(link)
    }
    close()
  }

  const MenuItems = items.reduce(
    (acc: JSX.Element[], { icon, label, link }, i) => {
      acc.push(
        <MenuItem onClick={() => routeTo(link)} key={acc.length + 1}>
          <ListItemIcon css={styles.icon}>{icon}</ListItemIcon>
          <ListItemText css={styles.text} primary={label} disableTypography />
          {delimeterPosition.includes(i) && <Divider css={styles.divider} />}
        </MenuItem>
      )
      if (delimeterPosition.includes(i)) {
        acc.push(<Divider css={styles.divider} key={acc.length + 1100} />)
      }
      return acc
    },
    []
  )

  return <div css={_css}>{MenuItems}</div>
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
