import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormTimeCardAuth } from '.'
import { SHOP_CONFIG } from '@/config/appConfigs'

type StoryObj = ComponentStoryObj<typeof FormTimeCardAuth>
export default {
  title: 'molecules/Form/FormTimeCardAuth',
  component: FormTimeCardAuth,
} as ComponentMeta<typeof FormTimeCardAuth>
const args = {
  initialValue: SHOP_CONFIG.shiftSubmitFrequency,
  setter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
