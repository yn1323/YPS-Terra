import { createStandaloneToast } from '@chakra-ui/react'
import type { UseToastOptions } from '@chakra-ui/react'

type ShowToastArgs = {
  title: string
  description?: string
  duration?: number
  status?: UseToastOptions['status']
}
export const showToast = ({
  title,
  description = '',
  duration = 5000,
  status = 'info',
}: ShowToastArgs) => {
  const toast = createStandaloneToast()
  toast({
    title,
    description,
    status,
    duration,
    isClosable: true,
    position: 'top-right',
  })
}
