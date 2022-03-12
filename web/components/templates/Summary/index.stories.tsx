import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Summary } from '.'

type StoryObj = ComponentStoryObj<typeof Summary>
export default {
  title: 'templates//Summary',
  component: Summary,
} as ComponentMeta<typeof Summary>
const args = {
  children: [
    <div key={0}>header</div>,
    <div key={1}>body</div>,
  ] as JSX.Element[],
}

// なぜか止まるのでコメントアウト
// export const Basic: StoryObj = { args }
