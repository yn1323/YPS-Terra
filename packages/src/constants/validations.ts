export const MAX_LENGTH = {
  USER_NAME: 32,
  SHOP_ID: 64,
  SHOP_NAME: 64,
} as const

export const FORM_ERROR_TEXT = {
  USER_NAME: 'ユーザー名を入力してください',
  SHOP_ID: '店舗IDを入力してください',
  SHOP_NAME: '店舗名を入力してください',
} as const

export const SUBMIT_FREQUENCY = [
  {
    label: '1週間ごと',
    value: '1w',
  },
  {
    label: '2週間ごと',
    value: '2w',
  },
  {
    label: '1ヶ月ごと',
    value: '1m',
  },
]

export const TIME_UNIT = [
  {
    label: '5分毎',
    value: '5',
  },
  {
    label: '10分毎',
    value: '10',
  },
  {
    label: '15分毎',
    value: '15',
  },
  {
    label: '20分毎',
    value: '20',
  },
  {
    label: '30分毎',
    value: '30',
  },
]
