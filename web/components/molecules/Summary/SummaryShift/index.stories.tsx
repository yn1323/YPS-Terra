import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SummaryShift } from '.'

type StoryObj = ComponentStoryObj<typeof SummaryShift>
export default {
  title: 'molecules/Summary/SummaryShift',
  component: SummaryShift,
} as ComponentMeta<typeof SummaryShift>
const args = {}

export const Basic: StoryObj = { args }
