import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Step } from '.'

type StoryObj = ComponentStoryObj<typeof Step>
export default {
  title: 'templates/Step',
  component: Step,
  decorators: [
    Story => (
      <div style={{ width: '100%', height: 'calc(100vh - 100px)' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Step>
const args = {
  labels: ['Step 1', 'Step 2', 'Step 3'],
  children: [
    <div key={0}>Step 1</div>,
    <div key={1}>Step 2</div>,
    <div key={2}>Step 3</div>,
  ],
  defaultStep: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit: () => {},
}

export const Basic: StoryObj = {
  args,
}
