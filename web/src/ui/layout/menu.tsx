import {
  AccessAlarm,
  Alarm,
  Assessment,
  Build,
  CompareArrows,
  ExitToApp,
  HelpOutline,
  Home,
  HomeWork,
  LibraryBooks,
  MoveToInbox,
  PeopleAltOutlined,
  Send,
  ShoppingCart,
} from '@mui/icons-material'

export type MenuItem = {
  icon: JSX.Element
  label: string
  link: string
}
type Menu = { [key: string]: MenuItem }
export type HeaderMenu = MenuItem & {
  hasMenu: boolean
  delimeterPosition?: number[]
  items?: MenuItem[]
}

export const MENU: Menu = {
  GROUP_MYPAGE: { icon: <Home />, label: 'マイページ', link: '' },
  GROUP_REQUESTS: { icon: <Send />, label: '申請', link: '' },
  GROUP_MANAGEMENT: { icon: <ShoppingCart />, label: '店舗管理', link: '' },

  TOP: { icon: <HomeWork />, label: 'TOP', link: '' },
  SHIFT: { icon: <LibraryBooks />, label: 'シフト', link: '' },
  ATTENDANCE: { icon: <Assessment />, label: '勤怠', link: '' },
  TIMECARD: { icon: <Alarm />, label: 'タイムカード', link: '/timecard' },
  SHIFT_REQ: { icon: <MoveToInbox />, label: 'シフト申請', link: '' },
  TIMECARD_REQ: {
    icon: <CompareArrows />,
    label: 'タイムカード編集',
    link: '',
  },
  REQUESTS: { icon: <Send />, label: '申請状況', link: '' },
  SHIFT_MANAGEMENT: { icon: <LibraryBooks />, label: 'シフト管理', link: '' },
  ATTENDANCE_MANAGEMENT: { icon: <AccessAlarm />, label: '勤怠管理', link: '' },
  USER_MANAGEMENT: {
    icon: <PeopleAltOutlined />,
    label: 'ユーザー管理',
    link: '',
  },

  CONFIG: {
    icon: <Build />,
    label: '設定',
    link: '',
  },
  QA: {
    icon: <HelpOutline />,
    label: 'よくある質問',
    link: '',
  },
  LOGOUT: {
    icon: <ExitToApp />,
    label: 'ログアウト',
    link: '/logout',
  },
}

export const COMMON_MENU = [
  {
    ...MENU.GROUP_MYPAGE,
    hasMenu: true,
    items: [MENU.TOP, MENU.SHIFT, MENU.ATTENDANCE],
  },
  {
    ...MENU.GROUP_REQUESTS,
    hasMenu: true,
    items: [MENU.SHIFT_REQ, MENU.TIMECARD_REQ, MENU.REQUESTS],
    delimeterPosition: [1],
  },
]

export const TIMECARD = [
  {
    ...MENU.TIMECARD,
    hasMenu: false,
  },
]

export const ADMIN_MENU = [
  {
    ...MENU.GROUP_MANAGEMENT,
    hasMenu: true,
    items: [
      MENU.SHIFT_MANAGEMENT,
      MENU.ATTENDANCE_MANAGEMENT,
      MENU.USER_MANAGEMENT,
    ],
  },
]

export const USER_MENU = [MENU.CONFIG, MENU.QA, MENU.LOGOUT]
