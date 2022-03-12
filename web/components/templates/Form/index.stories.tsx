import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Form } from '.'

type StoryObj = ComponentStoryObj<typeof Form>
export default {
  title: 'templates/Form',
  component: Form,
} as ComponentMeta<typeof Form>
const args = {
  definition: 'User type',
  children: <div>aaa</div>,
}

export const Basic: StoryObj = { args }
