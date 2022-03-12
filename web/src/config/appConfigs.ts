import dayjs, { Dayjs } from 'dayjs'

export type UserType = 'general' | 'admin'
export type ShiftTime = Dayjs
export type ShiftTimeUnit = '5' | '10' | '15' | '20' | '30'
export type ShiftSubmitFrequency = '1w' | '2w' | '1m'
export type TimeCardAuth = boolean
export type UserName = string
export type ShopName = string
export type ShopId = string

type UserConfig = {
  userType: UserType
  timeCardAuth: TimeCardAuth
  userName: UserName
}
type ShopConfig = {
  startShiftTime: ShiftTime
  endShiftTime: ShiftTime
  shiftTimeUnit: ShiftTimeUnit
  shiftSubmitFrequency: ShiftSubmitFrequency
  shopName: ShopName
  shopId: ShopId
}

export const USER_CONFIG: UserConfig = {
  userType: 'admin',
  timeCardAuth: false,
  userName: '',
}

export const SHOP_CONFIG: ShopConfig = {
  startShiftTime: dayjs('2021-10-02 9:00', 'YYYY-MM-DD hh:mm'),
  endShiftTime: dayjs('2021-10-02 18:00', 'YYYY-MM-DD hh:mm'),
  shiftSubmitFrequency: '1w',
  shiftTimeUnit: '5',
  shopName: '',
  shopId: '',
}
