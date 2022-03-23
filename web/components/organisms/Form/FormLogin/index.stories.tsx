import { ComponentMeta } from '@storybook/react'
import { ComponentProps, useEffect } from 'react'
import { FormLogin } from '.'
import { useOnAuthStateChanged } from '@/hooks/useOnAuthStateChanged'

export default {
  title: 'organisms/Form/FormLogin',
  component: FormLogin,
} as ComponentMeta<typeof FormLogin>

type Props = ComponentProps<typeof FormLogin>
const Template = (props: Props) => {
  useOnAuthStateChanged()
  return <FormLogin {...props} />
}
export const Basic = Template.bind({})
