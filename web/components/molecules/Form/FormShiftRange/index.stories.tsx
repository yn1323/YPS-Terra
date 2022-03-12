import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormShiftRange } from '.'
import { SHOP_CONFIG } from '@/config/appConfigs'

type StoryObj = ComponentStoryObj<typeof FormShiftRange>
export default {
  title: 'molecules/Form/FormShiftRange',
  component: FormShiftRange,
} as ComponentMeta<typeof FormShiftRange>
const args = {
  startInitialValue: SHOP_CONFIG.startShiftTime,
  startTimeSetter: () => {
    true
  },
  endInitialValue: SHOP_CONFIG.endShiftTime,
  endTimeSetter: () => {
    true
  },
}

export const Basic: StoryObj = { args }
