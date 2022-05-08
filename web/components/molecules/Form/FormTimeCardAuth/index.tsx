import { Button, HStack, Text, VStack } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

export const FormTimeCardAuth: FC = () => {
  const form = useFormContext()
  const [timeCardAuth, setTimeCardAuth] = useState(false)

  useEffect(() => {
    if (form && form.setValue) {
      form.setValue('timeCardAuth', timeCardAuth)
    }
  }, [timeCardAuth, form])

  return (
    <VStack alignItems="flex-start" spacing={0}>
      <Text mb={2}>タイムカード入力権限</Text>
      <HStack spacing={1}>
        <Button
          onClick={() => setTimeCardAuth(true)}
          colorScheme={timeCardAuth ? 'primary' : 'gray'}
        >
          管理者のみ
        </Button>
        <Button
          onClick={() => setTimeCardAuth(false)}
          colorScheme={!timeCardAuth ? 'primary' : 'gray'}
        >
          全員可
        </Button>
      </HStack>
    </VStack>
  )
}
