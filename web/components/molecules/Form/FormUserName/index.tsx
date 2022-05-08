import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { FaUserAlt } from 'react-icons/fa'
import { MAX_LENGTH } from '@/constants/validations'

export const FormUserName: FC = () => {
  const form = useFormContext()
  const props = form ? { ...form.register('userName') } : {}
  return (
    <Box w="100%">
      <Text mb={2}>ユーザー名</Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaUserAlt} color="gray.400" />
        </InputLeftElement>
        <Input
          {...props}
          type="text"
          placeholder="〇〇 ✗✗"
          maxLength={MAX_LENGTH.USER_NAME}
        />
      </InputGroup>
    </Box>
  )
}
