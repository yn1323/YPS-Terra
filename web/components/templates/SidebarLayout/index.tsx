import { Button, useColorModeValue, VStack } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { MENU } from '@/ui/layout/menu'
import { FcNext, FcPrevious } from 'react-icons/fc'

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
    <VStack
      data-testid="menulist"
      alignItems={'flex-start'}
      borderRight="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      h="100vh"
      w={showLabel ? '200px' : '50px'}
      background={useColorModeValue('gray.50', undefined)}
    >
      {showLabel && (
        <Button
          onClick={() => setShowLabel(!showLabel)}
          leftIcon={<FcPrevious />}
          {...buttonProps({ showLabel })}
        />
      )}
      {!showLabel && (
        <Button
          onClick={() => setShowLabel(!showLabel)}
          leftIcon={<FcNext />}
          {...buttonProps({ showLabel })}
        />
      )}

      {tasks.map(({ icon, label, link }, i) => (
        <Button leftIcon={icon} key={i} {...buttonProps({ showLabel })}>
          {showLabel ? label : ''}
        </Button>
      ))}
      {commons.map(({ icon, label, link }, i) => (
        <Button leftIcon={icon} key={i} {...buttonProps({ showLabel })}>
          {showLabel ? label : ''}
        </Button>
      ))}
    </VStack>
  )
}
