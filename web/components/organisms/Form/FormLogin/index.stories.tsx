import { ComponentMeta } from '@storybook/react'
import { ComponentProps } from 'react'
import { FormLogin } from '.'

export default {
  title: 'organisms/Form/FormLogin',
  component: FormLogin,
} as ComponentMeta<typeof FormLogin>

type Props = ComponentProps<typeof FormLogin>
const Template = (props: Props) => {
  return <FormLogin {...props} />
}
export const Basic = Template.bind({})
