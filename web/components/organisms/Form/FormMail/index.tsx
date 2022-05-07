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

export const SUBMIT_LABELS = {
  login: 'ログイン',
  reset: 'パスワードリセット',
  signUp: '登録する',
} as const

export type MailFormType = keyof typeof SUBMIT_LABELS

type PropTypes = {
  mailFormType: MailFormType
}

export const FormMail: FC<PropTypes> = ({ mailFormType }) => {
  const isSignUp = mailFormType === 'signUp'
  const isLogin = mailFormType === 'login'
  const isForget = mailFormType === 'reset'
  const mailOptionButtons = [
    { label: '新規登録', url: '/login/register', show: isLogin },
    { label: 'パスワードを忘れた方', url: '/login/reset', show: isLogin },
    { label: 'ログイン画面に戻る', url: '/login', show: isSignUp || isForget },
  ]
  const submitLabel = SUBMIT_LABELS[mailFormType]

  return (
    <Stack spacing={4} w="300px">
      <InputGroup>
        <InputLeftElement color="gray.300" pointerEvents="none">
          <FiMail />
        </InputLeftElement>
        <Input type="email" placeholder="Eメールアドレス" />
      </InputGroup>
      {!isForget && (
        <InputGroup>
          <InputLeftElement color="gray.300" pointerEvents="none">
            <RiLockPasswordLine />
          </InputLeftElement>
          <Input type="password" placeholder="パスワード" />
        </InputGroup>
      )}
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
