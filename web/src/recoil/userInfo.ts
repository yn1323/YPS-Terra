import { atom } from 'recoil'

export interface UserInfo {
  token: string
  uid: string
  isAnonymous: boolean
}

export const defaultUserInfo = {
  token: '',
  uid: '',
  isAnonymous: false,
}

export const userInfoState = atom<UserInfo>({
  key: 'userInfo',
  default: defaultUserInfo,
})
