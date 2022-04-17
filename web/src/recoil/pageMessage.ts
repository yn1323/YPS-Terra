import { atom } from 'recoil'

export type PageMessage = typeof defaultPageMessage

export const defaultPageMessage = {
  registerSucceeded: false,
}

export const pageMessage = atom<PageMessage>({
  key: 'message',
  default: defaultPageMessage,
})
