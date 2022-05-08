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
import { FaHome } from 'react-icons/fa'
import { MAX_LENGTH } from '@/constants/validations'

export const FormShopName: FC = () => {
  const form = useFormContext()
  const props = form ? { ...form.register('shopName', { required: true }) } : {}
  return (
    <Box w="100%">
      <Text mb={2}>店舗名</Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaHome} color="gray.400" />
        </InputLeftElement>
        <Input
          {...props}
          type="text"
          placeholder="〇〇店"
          maxLength={MAX_LENGTH.SHOP_NAME}
        />
      </InputGroup>
    </Box>
  )
}
