import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { StepButton } from '.'

type StoryObj = ComponentStoryObj<typeof StepButton>
export default {
  title: 'atoms/Step/StepButton',
  component: StepButton,
} as ComponentMeta<typeof StepButton>
const args = {
  labels: ['Step 1', 'Step 2', 'Step 3'],
  currentStep: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  nextStep: (_: number) => {},
}

export const Basic: StoryObj = {
  args,
}
