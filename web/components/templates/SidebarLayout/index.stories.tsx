import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SidebarLayout } from '.'

type StoryObj = ComponentStoryObj<typeof SidebarLayout>
export default {
  title: 'templates/SidebarLayout',
  component: SidebarLayout,
} as ComponentMeta<typeof SidebarLayout>
const args = {}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
