import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SummaryRequest } from '.'

type StoryObj = ComponentStoryObj<typeof SummaryRequest>
export default {
  title: 'molecules/Summary/SummaryRequest',
  component: SummaryRequest,
} as ComponentMeta<typeof SummaryRequest>
const args = {}

export const Basic: StoryObj = { args }
