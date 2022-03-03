import { ComponentMeta } from '@storybook/react'
import { SampleButton } from '.'

export default {
  component: SampleButton,
} as ComponentMeta<typeof SampleButton>
export const Primary = { args: { primary: true, label: 'ok' } }
