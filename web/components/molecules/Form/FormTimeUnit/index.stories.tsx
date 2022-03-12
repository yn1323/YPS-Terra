import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormTimeUnit } from '.'
import { SHOP_CONFIG } from '@/config/appConfigs'

type StoryObj = ComponentStoryObj<typeof FormTimeUnit>
export default {
  title: 'molecules/Form/FormTimeUnit',
  component: FormTimeUnit,
} as ComponentMeta<typeof FormTimeUnit>
const args = {
  initialValue: SHOP_CONFIG.shiftTimeUnit,
  setter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
