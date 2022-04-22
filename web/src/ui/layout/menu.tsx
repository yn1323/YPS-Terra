import {
  Alarm,
  Assessment,
  Build,
  ExitToApp,
  HelpOutline,
  Home,
  LibraryBooks,
} from '@mui/icons-material'

export type MenuItem = {
  icon: JSX.Element
  label: string
  link: string
}
type Menu = { [key: string]: MenuItem }

export const MENU: Menu = {
  TOP: { icon: <Home />, label: 'マイページ', link: '/mypage' },
  SHIFT: { icon: <LibraryBooks />, label: 'シフト', link: '/shift' },
  ATTENDANCE: { icon: <Assessment />, label: '勤務記録', link: '/history' },
  TIMECARD: { icon: <Alarm />, label: 'タイムカード', link: '/timecard' },
  CONFIG: {
    icon: <Build />,
    label: '設定',
    link: '/config',
  },
  HOWTO: {
    icon: <HelpOutline />,
    label: '使い方',
    link: '/help',
  },
  LOGOUT: {
    icon: <ExitToApp />,
    label: 'ログアウト',
    link: '/logout',
  },
}
