import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SummaryTable } from '.'

type StoryObj = ComponentStoryObj<typeof SummaryTable>
export default {
  title: 'atoms/Table/SummaryTable',
  component: SummaryTable,
} as ComponentMeta<typeof SummaryTable>
const args = {
  header: ['申請ユーザー', '種別', '対象', 'メモ'],
  body: [
    ['AAA', 'シフト申請', '11/1~11/14', 'メモです。'],
    ['BB', 'タイムカード編集', '11/1', 'メモです3。'],
  ],
  spHideColumnIndex: [3],
}

export const Basic: StoryObj = {
  args,
  parameters: { chromatic: { viewports: [414, 1080] } },
}
