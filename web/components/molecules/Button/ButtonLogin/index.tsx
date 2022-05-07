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
        leftIcon={<FaTwitter fontSize={styles.icon.fontSize} />}
        colorScheme="twitter"
        fontSize={styles.button.fontSize}
        w={styles.button.width}
      >
        Twitterでログイン
      </Button>
      <Button
        leftIcon={<FaUserAlt fontSize={styles.icon.fontSize} />}
        colorScheme="green"
        fontSize={styles.button.fontSize}
        w={styles.button.width}
      >
        ゲストでログイン
      </Button>
    </VStack>
  )
}
