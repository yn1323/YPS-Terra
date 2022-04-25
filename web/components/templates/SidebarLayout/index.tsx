import {
  Button,
  Divider,
  Spacer,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { FC, useState } from 'react'
import { MENU } from '@/ui/layout/menu'
import { FcNext, FcPrevious } from 'react-icons/fc'
import { motion } from 'framer-motion'

export const SidebarLayout: FC = () => {
  const tasks = [MENU.TOP, MENU.SHIFT, MENU.ATTENDANCE, MENU.TIMECARD]
  const commons = [MENU.CONFIG, MENU.HOWTO, MENU.LOGOUT]
  const [showLabel, setShowLabel] = useState(true)

  const buttonProps = ({ showLabel }: { showLabel: boolean }) => ({
    variant: 'ghost',
    w: showLabel ? '100%' : '100%',
    justifyContent: 'flex-start',
    _hover: { bg: useColorModeValue('gray.100', 'gray.700') },
    rounded: 0,
  })

  return (
    <motion.div
      initial={{
        width: showLabel ? '200px' : '50px',
      }}
      animate={{
        width: showLabel ? '200px' : '50px',
      }}
      data-testid="drawer"
    >
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
          />
        )}
        {!showLabel && (
          <Button
            onClick={() => setShowLabel(!showLabel)}
            leftIcon={<FcNext />}
            {...buttonProps({ showLabel })}
            data-testid="openButton"
          />
        )}
        <Divider />
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
    </motion.div>
  )
}
