import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Stepper } from '.'

type StoryObj = ComponentStoryObj<typeof Stepper>
export default {
  title: 'templates/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>
const args = {
  steps: [
    {
      label: '初期設定',
      component: <div>初期設定</div>,
    },
    {
      label: 'タイムカード',
      component: <div>タイムカード</div>,
    },
    {
      label: '権限設定',
      component: <div>権限設定</div>,
    },
  ],
  validationMessage: () => 'not ok',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  completed: () => {},
}

export const Basic: StoryObj = {
  args,
}
export const NoError: StoryObj = {
  args: {
    ...args,
    validationMessage: () => '',
  },
}
