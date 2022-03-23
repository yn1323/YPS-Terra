import { atom } from 'recoil'

export interface UserInfo {
  jwt: string
  uid: string
}

const userInfo = {
  jwt: '',
  uid: '',
}

export const userInfoState = atom<UserInfo>({
  key: 'userInfo',
  default: userInfo,
})
