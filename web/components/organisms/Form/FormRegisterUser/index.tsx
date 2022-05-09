import { VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { showCommonServerError } from '@/localHelpers/ui'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { userInfoState } from '@/recoil/userInfo'
import { useRegisterUser } from '@/services/register/registerUser'
import { Step } from '@/templates/Step'

export type FormRegisterUserType = {
  userName: string
}

type PropTypes = {
  shopId: string
}

export const FormRegisterUser: FC<PropTypes> = ({ shopId }) => {
  const [defaultStep] = useState(-1)
  const labels = ['ユーザー名']
  const methods = useForm<FormRegisterUserType>({
    defaultValues: {
      userName: '',
    },
  })
  const { setError } = methods
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
    if (!userName) {
      setError('userName', { message: 'ユーザー名を入力してください' })
      return
    }
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
      spacing: 4,
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
          <FormUserName />
        </VStack>
      </Step>
    </FormProvider>
  )
}
