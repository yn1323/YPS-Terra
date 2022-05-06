import { Button, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { FaTwitter, FaUserAlt } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export const ButtonLogin: FC = () => {
  const styles = {
    icon: {
      fontSize: 18,
    },
    button: {
      width: 300,
      fontSize: 'sm',
    },
  }
  return (
    <VStack data-testid="buttonlogin" spacing={4}>
      <Button
        leftIcon={<FcGoogle fontSize={styles.icon.fontSize} />}
        w={styles.button.width}
        fontSize={styles.button.fontSize}
      >
        Googleでログイン
      </Button>
      <Button
        leftIcon={<FaTwitter color="white" fontSize={styles.icon.fontSize} />}
        colorScheme="twitter"
        color="white"
        fontSize={styles.button.fontSize}
        w={styles.button.width}
      >
        Twitterでログイン
      </Button>
      <Button
        leftIcon={<FaUserAlt color="white" fontSize={styles.icon.fontSize} />}
        bg="green"
        _hover={{ bg: 'green.600' }}
        color="white"
        fontSize={styles.button.fontSize}
        w={styles.button.width}
      >
        ゲストでログイン
      </Button>
    </VStack>
  )
}
