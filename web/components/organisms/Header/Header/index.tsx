import { css } from '@emotion/react'
import { AppBar, Button, Toolbar } from '@mui/material'
import { FC, useMemo, Fragment } from 'react'
import { HeaderTitle } from '@/atoms/Text/HeaderTitle'
import { MenuAvatar } from '@/molecules/Menu/MenuAvatar'
import { MenuHeader } from '@/molecules/Menu/MenuHeader'
import { mediaQueries } from '@/ui/mixins/breakpoint'
import { themes } from '@/ui/theme'

type PropTypes = {
  isLoggedIn?: boolean
  isInitialLogin?: boolean
}

export const Header: FC<PropTypes> = ({
  isLoggedIn = false,
  isInitialLogin = false,
}) => {
  const headerItems = useMemo(
    () => [
      isLoggedIn && <MenuHeader isAdmin showTimeCard />,
      isLoggedIn && !isInitialLogin && <MenuAvatar />,
      !isLoggedIn && !isInitialLogin && (
        <Button variant="contained" color="primary" size="small">
          ログイン
        </Button>
      ),
    ],
    [isLoggedIn, isInitialLogin]
  )

  return (
    <AppBar css={styles.container} position="fixed">
      <Toolbar
        css={[styles.toolbar, isLoggedIn && styles.toolbarSpace]}
        variant="dense"
      >
        <HeaderTitle isLoggedIn={isLoggedIn}>YPS</HeaderTitle>
        {headerItems.map((item, i) => (
          <Fragment key={i}>{item}</Fragment>
        ))}
      </Toolbar>
    </AppBar>
  )
}
const styles = {
  container: css`
    background: ${themes.palette.secondary.main};
    box-shadow: none;
    ${mediaQueries('sm')} {
      display: flex;
      align-items: center;
    }
  `,
  toolbar: css`
    color: ${themes.palette.secondary.contrastText};
    ${mediaQueries('sm')} {
      width: ${themes.breakpoints.values.lg}px;
    }
  `,
  toolbarSpace: css`
    padding: 0 16px;
  `,
}
