import { Select, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { TIME_UNIT } from '@/constants/validations'

export const FormTimeUnit: FC = () => {
  const form = useFormContext()
  const props = form ? { ...form.register('timeUnit') } : {}
  return (
    <VStack alignItems="flex-start">
      <Text>シフト作成時間単位</Text>
      <Select {...props}>
        {TIME_UNIT.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </VStack>
  )
}
