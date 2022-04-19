import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { userEvent, within, screen } from '@storybook/testing-library'
import { Stepper } from '.'

type StoryObj = ComponentStoryObj<typeof Stepper>
export default {
  title: 'templates/Stepper',
  component: Stepper,
} as ComponentMeta<typeof Stepper>
const args = {
  labels: ['初期設定', ' タイムカード', '権限設定'],
  children: [
    <div key={1}>初期設定</div>,
    <div key={2}>タイムカード</div>,
    <div key={3}>権限設定</div>,
  ],
  validationMessage: () => 'not ok',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  completed: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onStepChanged: (_: number, __: number) => {},
  moveStep: 0,
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

export const Demo: StoryObj = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await !screen.findByText('戻る')
    await !screen.findByText('完了')
    await userEvent.click(canvas.getByText('次へ'))
    await screen.findByText('戻る')
    await userEvent.click(canvas.getByText('次へ'))
    await screen.findByText('戻る')
    await screen.findByText('完了')
    await userEvent.click(canvas.getByText('初期設定'))
    await screen.findByText('次へ')
  },
}
