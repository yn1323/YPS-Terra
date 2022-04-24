import { FC, useState } from 'react'
import { Button, VStack } from '@chakra-ui/react'
import { MENU } from '@/ui/layout/menu'
import { FcNext, FcPrevious } from 'react-icons/fc'

export const MenuList: FC = () => {
  const tasks = [MENU.TOP, MENU.SHIFT, MENU.ATTENDANCE, MENU.TIMECARD]
  const commons = [MENU.CONFIG, MENU.HOWTO, MENU.LOGOUT]
  const [showLabel, setShowLabel] = useState(true)

  return (
    <VStack data-testid="menulist" alignItems={'flex-start'}>
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

const buttonProps = ({ showLabel }: { showLabel: boolean }) => ({
  variant: 'ghost',
  w: showLabel ? '100%' : '100%',
  justifyContent: 'flex-start',
  _hover: { bg: '#00000008' },
})
