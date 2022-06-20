import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegisterAddShop } from '.'
import { Shop } from '@/graphql/generated'

type StoryObj = ComponentStoryObj<typeof FormRegisterAddShop>
export default {
  title: 'organisms/Form/FormRegisterAddShop',
  component: FormRegisterAddShop,
  decorators: [
    Story => (
      <div style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FormRegisterAddShop>
const args = {
  shopInfo: {
    closeTime: 1575385200000,
    openTime: 1575363600000,
    shopId: 'D1mKTdAKXtsQlJLvtApX',
    shopName: 'someShop',
    submitFrequency: '0.5m',
    timeUnit: 5,
    useTimeCard: false,
  } as Shop,
  userInfo: {
    avatar: '',
    memberOf: [],
    userId: 'aaaaa',
    userName: 'userName',
  },
}

export const Basic: StoryObj = {
  args,
}
