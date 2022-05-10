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
import { FaIdCard } from 'react-icons/fa'
import { MAX_LENGTH } from '@/constants/validations'

const KEY = 'shopId'

export const FormShopId: FC = () => {
  const form = useFormContext()
  const props = form
    ? { ...form.register(KEY, { required: '店舗IDを入力してください' }) }
    : {}
  const isInvalid = !!form?.formState.errors[KEY]
  const message = isInvalid ? form?.formState.errors[KEY].message : ''

  return (
    <Box w="100%">
      <Text mb={2}>店舗ID</Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={FaIdCard} color="gray.400" />
        </InputLeftElement>
        <Input
          {...props}
          isInvalid={!!isInvalid}
          errorBorderColor="crimson"
          type="text"
          placeholder="xxxxxxx"
          maxLength={MAX_LENGTH.SHOP_ID}
        />
      </InputGroup>
      {!!message && (
        <Text size="sm" color="crimson">
          {message}
        </Text>
      )}
    </Box>
  )
}
