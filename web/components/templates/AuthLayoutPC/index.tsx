import {
  Box,
  Button,
  Divider,
  Flex,
  Spacer,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { MENU } from '@/ui/layout/menu'

type PropTypes = {
  children: JSX.Element | JSX.Element[]
}

export const AuthLayoutPC: FC<PropTypes> = ({ children }) => {
  const showElement = Array.isArray(children) ? children : [children]
  const tasks = [MENU.TOP, MENU.SHIFT, MENU.ATTENDANCE, MENU.TIMECARD]
  const commons = [MENU.CONFIG, MENU.HOWTO, MENU.LOGOUT]
  const [showLabel, setShowLabel] = useState(true)
  const buttonHoverColor = useColorModeValue('gray.100', 'gray.700')

  const buttonProps = ({ showLabel }: { showLabel: boolean }) => ({
    variant: 'ghost',
    w: showLabel ? '100%' : '100%',
    justifyContent: 'flex-start',
    _hover: { bg: buttonHoverColor },
    rounded: 0,
  })

  const drawerAnimation = {
    width: showLabel ? '200px' : '50px',
  }

  return (
    <motion.div
      initial={drawerAnimation}
      animate={drawerAnimation}
      data-testid="drawer"
    >
      <Flex>
        <VStack
          alignItems={'flex-start'}
          borderRight="1px"
          borderColor={useColorModeValue('gray.200', 'gray.600')}
          h="100vh"
          w="100%"
          background={useColorModeValue('gray.50', undefined)}
        >
          {showLabel && (
            <Button
              onClick={() => setShowLabel(!showLabel)}
              leftIcon={<FcPrevious />}
              {...buttonProps({ showLabel })}
              data-testid="closeButton"
              display={{ base: 'none', md: 'flex' }}
            />
          )}
          {!showLabel && (
            <Button
              onClick={() => setShowLabel(!showLabel)}
              leftIcon={<FcNext />}
              {...buttonProps({ showLabel })}
              data-testid="openButton"
              display={{ base: 'none', md: 'flex' }}
            />
          )}
          <Divider display={{ base: 'none', md: 'flex' }} />
          {tasks.map(({ icon, label, link }, i) => (
            <Button leftIcon={icon} key={i} {...buttonProps({ showLabel })}>
              {showLabel ? label : ''}
            </Button>
          ))}
          <Spacer />
          <Divider />
          {commons.map(({ icon, label, link }, i) => (
            <Button leftIcon={icon} key={i} {...buttonProps({ showLabel })}>
              {showLabel ? label : ''}
            </Button>
          ))}
        </VStack>
        <Box w={`calc(100vw - ${drawerAnimation.width})`} p={4}>
          {showElement}
        </Box>
      </Flex>
    </motion.div>
  )
}
