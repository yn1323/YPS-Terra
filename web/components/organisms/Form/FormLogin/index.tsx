import { Box, Divider, HStack, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ButtonLogin } from '@/molecules/Button/ButtonLogin'
import { FormMail, MailFormType } from '@/organisms/Form/FormMail'

type PropTypes = {
  mailFormType: MailFormType
}

export const FormLogin: FC<PropTypes> = ({ mailFormType }) => {
  return (
    <VStack w="360px" spacing={4}>
      <ButtonLogin />
      <HStack h={10} w="100%" spacing={4}>
        <Divider />
        <Box>or</Box>
        <Divider />
      </HStack>
      <FormMail mailFormType={mailFormType} />
    </VStack>
  )
}
