import { Select, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { SUBMIT_FREQUENCY } from '@/constants/validations'

export const FormSubmitFrequency: FC = () => {
  const form = useFormContext()
  const props = form ? { ...form.register('shiftSubmitFrequency') } : {}
  return (
    <VStack alignItems="flex-start">
      <Text>シフト提出頻度</Text>
      <Select {...props}>
        {SUBMIT_FREQUENCY.map(({ label, value }, i) => (
          <option key={i} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </VStack>
  )
}
