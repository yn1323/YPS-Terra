import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormSubmitFrequency } from '.'

type StoryObj = ComponentStoryObj<typeof FormSubmitFrequency>
export default {
  title: 'molecules/Form/FormSubmitFrequency',
  component: FormSubmitFrequency,
} as ComponentMeta<typeof FormSubmitFrequency>
const args = {}

export const Basic: StoryObj = {
  args,
}
