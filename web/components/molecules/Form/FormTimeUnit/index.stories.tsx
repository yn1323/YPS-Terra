import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { FormTimeUnit } from '.'

type StoryObj = ComponentStoryObj<typeof FormTimeUnit>
export default {
  title: 'molecules/Form/FormTimeUnit',
  component: FormTimeUnit,
} as ComponentMeta<typeof FormTimeUnit>
const args = {}

export const Basic: StoryObj = {
  args,
}
