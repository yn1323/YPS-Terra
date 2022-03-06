import { ComponentMeta } from '@storybook/react'
import { SampleButton as component } from '.'

export default {
  title: 'atoms/SampleButton',
  component: component,
} as ComponentMeta<typeof component>
export const Primary = { args: { primary: true, label: 'ok' } }
