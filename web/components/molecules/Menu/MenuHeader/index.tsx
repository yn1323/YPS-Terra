import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC, useMemo } from 'react'
import { MenuButton } from '@/molecules/Menu/MenuButton'
import {
  ADMIN_MENU,
  COMMON_MENU,
  HeaderMenu as HeaderMenuType,
  TIMECARD,
} from '@/ui/layout/menu'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  showTimeCard?: boolean
  isAdmin?: boolean
}

export const MenuHeader: FC<PropTypes> = ({ _css, showTimeCard, isAdmin }) => {
  const MENU = useMemo<HeaderMenuType[]>(
    () => [
      ...COMMON_MENU,
      ...(showTimeCard ? TIMECARD : []),
      ...(isAdmin ? ADMIN_MENU : []),
    ],
    [showTimeCard, isAdmin]
  )
  return (
    <div css={[_css, styles.container]}>
      {MENU.map(
        ({ icon, label, hasMenu, link, delimeterPosition, items }, i) => (
          <MenuButton
            icon={icon}
            hasMenu={hasMenu}
            link={link}
            delimeterPosition={delimeterPosition}
            items={items}
            key={i}
            data-testid="buttons"
          >
            {label}
          </MenuButton>
        )
      )}
    </div>
  )
}
const styles = {
  container: css`
    flex-grow: 1;
    display: none;
    ${mediaQueries('md')} {
      display: block;
    }
    > * {
      margin: 0 8px;
    }
  `,
}
