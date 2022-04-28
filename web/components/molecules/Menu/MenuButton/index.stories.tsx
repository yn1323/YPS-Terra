import { Build, Home, LibraryBooks } from '@mui/icons-material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { within, userEvent, screen } from '@storybook/testing-library'
import { MenuButton } from '.'

type StoryObj = ComponentStoryObj<typeof MenuButton>
export default {
  title: 'molecules/Menu/MenuButton',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>
const args = {
  icon: <Home />,
  children: 'LABEL',
  showArrow: false,
  link: '/top',
}
const dropDownArgs = {
  ...args,
  link: '',
  showArrow: true,
  delimeterPosition: [1],
  items: [
    {
      icon: <Home />,
      label: 'HOME',
      link: '/1',
    },
    {
      icon: <LibraryBooks />,
      label: 'LIBRARYBOOKS',
      link: '/2',
    },
    {
      icon: <Build />,
      label: 'BUILD',
      link: '/3',
    },
  ],
}
export const Basic: StoryObj = { args }
export const DropDown: StoryObj = {
  args: { ...dropDownArgs },
}

export const DropDownDemo: StoryObj = {
  args: { ...dropDownArgs },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getByTestId('button'))
    await screen.findByText('HOME')
    await screen.findByText('LIBRARYBOOKS')
    await screen.findByText('BUILD')
  },
}
