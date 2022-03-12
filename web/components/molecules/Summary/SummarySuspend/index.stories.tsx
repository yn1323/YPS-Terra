import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SummarySuspend } from '.'

type StoryObj = ComponentStoryObj<typeof SummarySuspend>
export default {
  title: 'molecules/Summary/SummarySuspend',
  component: SummarySuspend,
} as ComponentMeta<typeof SummarySuspend>
const args = {}

export const Basic: StoryObj = { args }
