import { composeStories } from '@storybook/testing-react'
import { render, screen } from '@testing-library/react'
import * as stories from './index.stories'

// NOTE: ユーザー操作によるUIがないならファイルごと削除すること
const { SuccessInput } = composeStories(stories)

test('test-name', async () => {
  const { container } = render(<SuccessInput />)
  await SuccessInput.play({ canvasElement: container })

  const input = screen.getByTestId('name') as HTMLInputElement
  expect(input.value).toEqual('some name')
})
