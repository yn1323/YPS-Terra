import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { useScreenSize } from '@/hooks/useScreenSize'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const CenterBox: FC<PropTypes> = ({ children }) => {
  const showElement = Array.isArray(children) ? children : [children]

  const { isPC } = useScreenSize()
  return (
    <VStack h="calc(100vh - 100px)" justifyContent="center">
      {isPC ? (
        <VStack
          shadow="md"
          border="1px"
          borderColor="gray.200"
          borderRadius="20px"
          py={12}
          px={4}
          w="400px"
        >
          {showElement}
        </VStack>
      ) : (
        showElement
      )}
    </VStack>
  )
}
