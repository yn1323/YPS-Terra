import { VStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { Shop } from '@/graphql/generated'
import { showCommonServerError, showToast } from '@/localHelpers/ui'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { userInfoState } from '@/recoil/userInfo'
import { useRegisterUser } from '@/services/register/registerUser'
import { Step } from '@/templates/Step'

export type FormRegisterUserType = {
  userName: string
}

type PropTypes = {
  shopId: string
  shopInfo: Shop
  isUserExist: boolean
}

export const FormRegisterUser: FC<PropTypes> = ({
  shopId,
  shopInfo,
  isUserExist,
}) => {
  // 店舗情報表示(shopInfo)
  if (isUserExist) {
    // ユーザー名のインプットを隠す、
    // 登録時の文言修正
  }
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
