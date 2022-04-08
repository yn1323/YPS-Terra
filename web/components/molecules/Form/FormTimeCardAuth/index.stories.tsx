import { ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import { FormTimeCardAuth } from '.'

export default {
  title: 'molecules/Form/FormTimeCardAuth',
  component: FormTimeCardAuth,
} as ComponentMeta<typeof FormTimeCardAuth>

export const Basic = () => {
  const [val, setVal] = useState(true)
  return (
    <FormTimeCardAuth initialValue={val} setter={(v: boolean) => setVal(v)} />
  )
}
