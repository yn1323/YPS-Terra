import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SummaryWorkTime } from '.'

type StoryObj = ComponentStoryObj<typeof SummaryWorkTime>
export default {
  title: 'molecules/Summary/SummaryWorkTime',
  component: SummaryWorkTime,
} as ComponentMeta<typeof SummaryWorkTime>
const args = {
  month: '11',
  name: 'neko',
  time: 25.5,
  imageUrl: 'imageUrl.jpg',
}

export const Basic: StoryObj = { args }
