import { atom } from 'recoil'

export type UserInfo = typeof defaultUserInfo
export const defaultUserInfo = {
  token: '',
  uid: '',
  isAnonymous: false,
}

export const userInfoState = atom<UserInfo>({
  key: 'userInfo',
  default: defaultUserInfo,
})
