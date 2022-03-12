import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { Popper, Placement } from '.'

type StoryObj = ComponentStoryObj<typeof Popper>
export default {
  title: 'atoms/Text/Popper',
  component: Popper,
  argTypes: {
    placement: {
      control: {
        type: 'select',
        labels: {
          top: 'top',
          'top-start': 'top-start',
          'top-end': 'top-end',
          left: 'left',
          'left-start': 'left-start',
          'left-end': 'left-end',
          right: 'right',
          'right-start': 'right-start',
          'right-end': 'right-end',
          bottom: 'bottom',
          'bottom-start': 'bottom-start',
          'bottom-end': 'bottom-end',
        },
      },
    },
  },
} as ComponentMeta<typeof Popper>
const args = {
  show: true,
  setShow: () => {
    console.log('close')
  },
  anchorEl: document.getElementsByTagName('body')[0],
  placement: 'bottom-start' as Placement,
  timeout: 200,
  children: <div>popper!</div>,
}

export const Basic: StoryObj = { args }
