import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { DoubleArrowSharp } from '@mui/icons-material'
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { MenuAvatar } from '@/molecules/Menu/MenuAvatar'
import { userInfoState } from '@/recoil/userInfo'
import { MENU } from '@/ui/layout/menu'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  open?: boolean
}

export const MenuList: FC<PropTypes> = ({ _css, open = true }) => {
  const { userName, avatarPath } = useRecoilValue(userInfoState)
  const router = useRouter()
  const [iconOnly, setOnlyIcon] = useState(!open)
  const clickHandler = (link: string) => {
    router.push(link)
  }
  const menus = [MENU.TOP, MENU.SHIFT, MENU.ATTENDANCE, MENU.TIMECARD]
  const menuDelimeter = [1]
  const configs = [MENU.CONFIG, MENU.HOWTO, MENU.LOGOUT]
  const configDelimeter = [2]
  return (
    <List css={[_css, styles.container]}>
      <Box>
        <div
          css={[
            styles.drawerButtonContainer,
            iconOnly && styles.drawerButtonCentering,
          ]}
        >
          <IconButton
            css={[!iconOnly && styles.drawerButtonLeft]}
            onClick={() => setOnlyIcon(!iconOnly)}
          >
            <DoubleArrowSharp />
          </IconButton>
        </div>
        {!iconOnly && (
          <MenuAvatar
            _css={styles.avatar}
            userName={userName}
            imagePath={avatarPath}
            onlyImage={iconOnly}
          />
        )}

        <Divider />
        {menus.map(({ icon, label, link }, index) => (
          <>
            {menuDelimeter.includes(index) && <Divider />}
            <ListItem
              css={styles.item}
              button
              key={index}
              onClick={() => clickHandler(link)}
            >
              <ListItemIcon css={[styles.icon, iconOnly && styles.iconOnly]}>
                {icon}
              </ListItemIcon>
              {!iconOnly && <ListItemText primary={label} />}
            </ListItem>
          </>
        ))}
      </Box>
      <Box>
        {configs.map(({ icon, label, link }, index) => (
          <>
            {configDelimeter.includes(index) && <Divider />}
            <ListItem
              css={styles.item}
              button
              key={index}
              onClick={() => clickHandler(link)}
            >
              <ListItemIcon css={[styles.icon, iconOnly && styles.iconOnly]}>
                {icon}
              </ListItemIcon>
              {!iconOnly && <ListItemText primary={label} />}
            </ListItem>
          </>
        ))}
      </Box>
    </List>
  )
}
const styles = {
  container: css`
    height: 100vh;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  drawerButtonContainer: css`
    display: flex;
    justify-content: flex-end;
  `,
  drawerButtonLeft: css`
    transform: scale(-1, 1);
  `,
  drawerButtonCentering: css`
    justify-content: center;
  `,
  avatar: css`
    margin-bottom: 20px;
  `,
  item: css`
    height: 46px;
  `,
  icon: css`
    min-width: 35px;
  `,
  iconOnly: css`
    min-width: initial;
  `,
}
