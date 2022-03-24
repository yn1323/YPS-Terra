export const MAX_LENGTH = {
  USER_NAME: 32,
  SHOP_ID: 64,
  SHOP_NAME: 64,
} as const

export const FORM_ERROR_TEXT = {
  USER_NAME: 'ユーザー名を入力してください',
  SHOP_ID: '店舗IDを入力してください',
  SHOP_NAME: '店舗名を入力してください',
  EMAIL: 'メールアドレスを入力してください',
  PASSWORD: 'パスワードを入力してください',
} as const

export const SHIFT_SUBMIT_FREQUENCY = ['1w', '0.5m', '1m'] as const
export type ShiftSubmitFrequency = typeof SHIFT_SUBMIT_FREQUENCY[number]

export const SHIFT_TIME_UNIT = [5, 10, 15, 30] as const
export type ShiftTimeUnit = typeof SHIFT_TIME_UNIT[number]

export const SUBMIT_FREQUENCY = [
  {
    label: '1週間ごと',
    value: '1w',
  },
  {
    label: '0.5ヶ月ごと',
    value: '0.5m',
  },
  {
    label: '1ヶ月ごと',
    value: '1m',
  },
]

export const TIME_UNIT = (() => {
  return SHIFT_TIME_UNIT.map(unit => ({
    label: `${unit}分ごと`,
    value: unit.toString(),
  }))
})()
