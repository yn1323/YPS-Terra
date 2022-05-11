import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  useTheme,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { CommonMeta } from '@/atoms/Meta/CommonMeta'
import { useOnAuthStateChanged } from '@/hooks/useOnAuthStateChanged'
import { useScreenSize } from '@/hooks/useScreenSize'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
  showLoginButton?: boolean
  showLogoutButton?: boolean
}

export const UnauthHeader: FC<PropTypes> = ({
  children,
  showLoginButton = true,
  showLogoutButton = false,
}) => {
  const showElement = Array.isArray(children) ? children : [children]
  const { isPC } = useScreenSize()
  const { breakpoints } = useTheme()
  useOnAuthStateChanged()

  const styles = {
    header: {
      height: isPC ? '56px' : '52px',
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
      <CommonMeta />
      <VStack p={2}>
        <HStack w={styles.header.width} h={styles.header.height}>
          <Box>
            <Link href="/" passHref>
              <HStack as="a">
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  width={32}
                  height={32}
                />
                <Text fontSize="2xl">YPS</Text>
              </HStack>
            </Link>
          </Box>
          <Spacer />
          <Box>
            {showLoginButton && (
              <Link href="/login" passHref>
                <Button
                  variant="outline"
                  colorScheme="primary"
                  size={styles.loginButon.size}
                  as="a"
                >
                  ログイン
                </Button>
              </Link>
            )}
            {showLogoutButton && (
              <Link href="/logout" passHref>
                <Button
                  variant="outline"
                  colorScheme="primary"
                  size={styles.loginButon.size}
                  as="a"
                >
                  ログアウト
                </Button>
              </Link>
            )}
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
