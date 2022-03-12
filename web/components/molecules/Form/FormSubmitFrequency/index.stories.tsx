import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormSubmitFrequency } from '.'
import { SHOP_CONFIG } from '@/config/appConfigs'

type StoryObj = ComponentStoryObj<typeof FormSubmitFrequency>
export default {
  title: 'molecules/Form/FormSubmitFrequency',
  component: FormSubmitFrequency,
} as ComponentMeta<typeof FormSubmitFrequency>
const args = {
  initialValue: SHOP_CONFIG.shiftSubmitFrequency,
  setter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
