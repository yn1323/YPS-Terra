import { atom } from 'recoil'

export type {{ input.name || pascal }} = typeof default{{ input.name || camel }}  

const default{{ input.name || pascal }} = {
  jwt: '',
  userId: '',
}

export const {{ input.name || camel }}State = atom<{{ input.name || pascal }}>({
  key: '{{ input.name || camel }}',
  default: default{{ input.name || pascal }},
})
