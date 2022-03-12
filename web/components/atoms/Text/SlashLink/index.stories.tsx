import { ComponentStoryObj, ComponentMeta } from '@storybook/react'
import { SlashLink } from '.'
import { FOOTER_LINKS } from '@/ui/layout/footer'

type StoryObj = ComponentStoryObj<typeof SlashLink>
export default {
  title: 'atoms/Text/SlashLink',
  component: SlashLink,
} as ComponentMeta<typeof SlashLink>
const args = {
  links: FOOTER_LINKS,
}

export const Basic: StoryObj = { args }
