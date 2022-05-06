import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'

type PropTypes = {
  isSignUp?: boolean
}

export const FormMail: FC<PropTypes> = ({ isSignUp = false }) => {
  const mailOptionButtons = [
    { label: '新規登録', url: '/login/register', show: !isSignUp },
    { label: 'パスワードを忘れた方', url: '/login/forget', show: !isSignUp },
    { label: 'ログイン画面に戻る', url: '/login', show: isSignUp },
  ]
  const submitLabel = isSignUp ? '登録する' : 'ログイン'

  return (
    <Stack spacing={4} w="300px">
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiMail />
        </InputLeftElement>
        <Input type="email" placeholder="Eメールアドレス" />
      </InputGroup>
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <RiLockPasswordLine />
        </InputLeftElement>
        <Input type="password" placeholder="パスワード" />
      </InputGroup>
      <Box pt={2} w="100%">
        <Button colorScheme="primary" w="100%">
          {submitLabel}
        </Button>
      </Box>
      <VStack alignItems="flex-end">
        {mailOptionButtons
          .filter(({ show }) => show)
          .map(({ label, url }, i) => (
            <Link href={url} key={i} passHref>
              <Button variant="ghost" size="sm" key={i} as="a">
                <Text as="u">{label}</Text>
              </Button>
            </Link>
          ))}
      </VStack>
    </Stack>
  )
}
