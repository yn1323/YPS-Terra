import { atom } from 'recoil'

export interface {{ input.name || pascal }} {
  jwt: string
  userId: string
}

const {{ input.name || camel }} = {
  jwt: '',
  userId: '',
}

export const {{ input.name || camel }}State = atom<{{ input.name || pascal }}>({
  key: '{{ input.name || camel }}',
  default: {{ input.name || camel }},
})
