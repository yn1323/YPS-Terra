import { Input } from '@chakra-ui/react'
import { FC } from 'react'

type PropTypes = {
  defaultVal: string
}

export const PickerDate: FC<PropTypes> = ({ defaultVal }) => {
  return <Input type="date" value={defaultVal} />
}
