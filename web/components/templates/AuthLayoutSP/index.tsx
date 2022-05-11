import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import {
  FaHome,
  FaCalendarAlt,
  FaFolderOpen,
  FaClock,
  FaEllipsisV,
  FaWrench,
  FaQuestionCircle,
  FaSignOutAlt,
} from 'react-icons/fa'
import { MENU } from '@/ui/layout/menu'

const HEIGHTS = {
  HEADER: 10,
  FOOTER: 3,
} as const
const NAVBAR_BUTTONS = [
  { ...MENU.TOP, icon: FaHome },
  { ...MENU.SHIFT, icon: FaCalendarAlt },
  { ...MENU.ATTENDANCE, icon: FaFolderOpen },
  { ...MENU.TIMECARD, icon: FaClock, label: '打刻' },
] as const
const DRAWER_BUTTONS = [
  { ...MENU.CONFIG, icon: <FaWrench /> },
  { ...MENU.HOWTO, icon: <FaQuestionCircle /> },
  {
    ...MENU.LOGOUT,
    icon: <FaSignOutAlt />,
  },
] as const

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}
export const AuthLayoutSP: FC<PropTypes> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const showElement = Array.isArray(children) ? children : [children]
  const uiProps = {
    icon: {
      color: useColorModeValue('gray.600', 'gray.300'),
    },
  }

  return (
    <Box height="100vh" position="relative">
      <HStack
        as="nav"
        borderBottom="1px"
        borderColor={useColorModeValue('gray.200', 'gray.600')}
        h={HEIGHTS.HEADER}
        w="100%"
        px={3}
        background={useColorModeValue('gray.50', undefined)}
      >
        <Text fontSize="xl">Screen Title</Text>
        <Spacer />
      </HStack>
      <Box
        height={`calc(100vh - ${HEIGHTS.HEADER / 4}rem - ${HEIGHTS.FOOTER}rem)`}
        overflow="scroll"
      >
        {showElement}
      </Box>
      <Box
        position="absolute"
        top={`calc(100vh - ${HEIGHTS.FOOTER}rem - 1px)`}
        width="100vw"
        borderTop="1px"
        borderColor={useColorModeValue('gray.200', 'gray.600')}
      >
        <HStack h="100%" justifyContent="space-between">
          {NAVBAR_BUTTONS.map(({ icon, label, link }, i) => (
            <Link key={i} href={link} passHref>
              <Button
                aria-label={label}
                h={`${HEIGHTS.FOOTER}rem`}
                variant="ghost"
                as="a"
              >
                <Flex
                  h={`${HEIGHTS.FOOTER}rem`}
                  flexDirection="column"
                  alignItems={'center'}
                >
                  <Icon
                    mt={1.5}
                    w={6}
                    h={6}
                    as={icon}
                    color={uiProps.icon.color}
                  />
                  <Text fontSize="10px" color={uiProps.icon.color}>
                    {label}
                  </Text>
                </Flex>
              </Button>
            </Link>
          ))}

          <Button
            h={`${HEIGHTS.FOOTER}rem`}
            w={4}
            variant="ghost"
            color={uiProps.icon.color}
            onClick={onOpen}
            data-testid="ellipsis"
          >
            <Icon mt={1} w={4} h={4} as={FaEllipsisV} />
          </Button>
        </HStack>
      </Box>
      <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <VStack>
              {DRAWER_BUTTONS.map(({ icon, label, link }, i) => (
                <Link key={i} href={link} passHref>
                  <Button
                    as="a"
                    leftIcon={icon}
                    variant="ghost"
                    w="100%"
                    justifyContent={'flex-start'}
                  >
                    {label}
                  </Button>
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
