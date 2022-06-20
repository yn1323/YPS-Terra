import { Box, Input, Text, VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { Shop } from '@/graphql/generated'
import { showCommonServerError } from '@/localHelpers/ui'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { userInfoState } from '@/recoil/userInfo'
import { useRegisterUser } from '@/services/register/registerUser'
import { Step } from '@/templates/Step'

export type FormRegisterUserType = {
  userName: string
}

type PropTypes = {
  shopInfo: Shop
}

export const FormRegisterUser: FC<PropTypes> = ({
  shopInfo: { shopId, shopName },
}) => {
  const [defaultStep] = useState(-1)
  const labels = ['設定']
  const methods = useForm<FormRegisterUserType>({
    defaultValues: {
      userName: '',
    },
  })
  const {
    registerUserMutation,
    loading,
    error,
    errorMessage,
    mutationSucceeded,
  } = useRegisterUser()
  const { uid } = useRecoilValue(userInfoState)
  const router = useRouter()

  useEffect(() => {
    if (mutationSucceeded) {
      router.push('/dashboard')
    }
  }, [mutationSucceeded, router])

  useEffect(() => {
    if (error) {
      showCommonServerError(errorMessage)
    }
  }, [error, errorMessage])

  const onSubmit: SubmitHandler<FormRegisterUserType> = ({ userName }) => {
    registerUserMutation({
      variables: {
        userId: uid,
        shopId,
        userName,
      },
    })
  }

  const props = {
    vstack: {
      spacing: 8,
      alignItems: 'flex-start',
      w: ['100%', '100%', '50%'],
    },
  }

  return (
    <FormProvider {...methods}>
      <Step
        labels={labels}
        onSubmit={onSubmit}
        defaultStep={defaultStep}
        isLoading={loading}
      >
        <VStack {...props.vstack}>
          <Box>
            <Text>登録店舗</Text>
            <Input variant="flushed" disabled value={shopName} />
          </Box>
          <FormUserName />
        </VStack>
      </Step>
    </FormProvider>
  )
}
