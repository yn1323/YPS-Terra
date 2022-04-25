import { FC, useState } from 'react'
import {
  HStack,
  IconButton,
  Spacer,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { FcList } from 'react-icons/fc'
export const AuthLayoutSP: FC = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const drawerHandler = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <HStack
      as="nav"
      borderBottom="1px"
      borderColor={useColorModeValue('gray.200', 'gray.600')}
      h="10"
      w="100%"
      px={3}
      background={useColorModeValue('gray.50', undefined)}
    >
      <Text fontSize="xl">Screen Title</Text>
      <Spacer />
      <IconButton
        aria-label="Show drawer"
        icon={<FcList />}
        variant="ghost"
        _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
        rounded={0}
        onClick={drawerHandler}
      ></IconButton>
    </HStack>
  )
}
