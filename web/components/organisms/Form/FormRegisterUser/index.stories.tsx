import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormRegisterUser } from '.'
import { Shop } from '@/graphql/generated'

type StoryObj = ComponentStoryObj<typeof FormRegisterUser>
export default {
  title: 'organisms/Form/FormRegisterUser',
  component: FormRegisterUser,
  decorators: [
    Story => (
      <div style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof FormRegisterUser>
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
}

export const Basic: StoryObj = {
  args,
}
