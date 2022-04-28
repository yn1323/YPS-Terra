import { Build, Home, LibraryBooks } from '@mui/icons-material'
import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { ListMenu } from '.'

type StoryObj = ComponentStoryObj<typeof ListMenu>
export default {
  title: 'atoms/List/ListMenu',
  component: ListMenu,
} as ComponentMeta<typeof ListMenu>
const args = {
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
  delimeterPosition: [1],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  close: () => {},
}

export const Basic: StoryObj = { args }
