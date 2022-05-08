import { HStack, Input, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

export const FormShiftRange: FC = () => {
  const form = useFormContext()
  const openTimeProps = form ? { ...form.register('openTime') } : {}
  const closeTimeProps = form ? { ...form.register('closeTime') } : {}

  return (
    <VStack alignItems="flex-start">
      <Text>シフト設定可能時間</Text>
      <HStack>
        <Input type="time" {...openTimeProps} />
        <Text>〜</Text>
        <Input type="time" {...closeTimeProps} />
      </HStack>
    </VStack>
  )
}
