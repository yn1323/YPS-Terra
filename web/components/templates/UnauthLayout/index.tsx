import {
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import { useScreenSize } from '@/hooks/useScreenSize'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const UnauthHeader: FC<PropTypes> = ({ children }) => {
  const showElement = Array.isArray(children) ? children : [children]
  const { isPC } = useScreenSize()
  const { breakpoints } = useTheme()
  const styles = {
    header: {
      width: isPC ? breakpoints.lg : '100%',
    },
    loginButon: {
      size: isPC ? 'md' : 'sm',
    },
    content: {
      width: isPC ? breakpoints.lg : '100%',
    },
  }

  return (
    <Box>
      <VStack p={2}>
        <HStack w={styles.header.width}>
          <Box>
            <HStack>
              <Image alt="logo" src="/images/logo.png" width={32} height={32} />
              <Text fontSize="2xl">YPS</Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Button
              variant="outline"
              colorScheme="primary"
              size={styles.loginButon.size}
            >
              ログイン
            </Button>
          </Box>
        </HStack>
      </VStack>
      <HStack justifyContent="center">
        <Box w={styles.header.width} p={2}>
          {showElement}
        </Box>
      </HStack>
    </Box>
  )
}
