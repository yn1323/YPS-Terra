import { VStack } from '@chakra-ui/react'
import { Dayjs } from 'dayjs'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { ShiftSubmitFrequency, ShiftTimeUnit } from '@/constants/validations'
import { showCommonServerError, showToast } from '@/localHelpers/ui'
import { FormShiftRange } from '@/molecules/Form/FormShiftRange'
import { FormShopName } from '@/molecules/Form/FormShopName'
import { FormSubmitFrequency } from '@/molecules/Form/FormSubmitFrequency'
import { FormTimeCardAuth } from '@/molecules/Form/FormTimeCardAuth'
import { FormTimeUnit } from '@/molecules/Form/FormTimeUnit'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { userInfoState } from '@/recoil/userInfo'
import { useRegisterAdminUserAndShop } from '@/services/register/registerAdminUserAndShop'
import { Step } from '@/templates/Step'

export type FormRegisterAdminType = {
  userName: string
  shopName: string
  openTime: Dayjs
  closeTime: Dayjs
  timeUnit: ShiftTimeUnit
  shiftSubmitFrequency: ShiftSubmitFrequency
  timeCardAuth: boolean
}

export const FormRegisterAdmin: FC = () => {
  const [defaultStep, setDefaultStep] = useState(-1)
  const labels = ['ユーザー名', '店舗情報', 'シフト設定', '権限設定']
  const methods = useForm<FormRegisterAdminType>({
    defaultValues: {
      userName: '',
      shopName: '',
      openTime: '09:00',
      closeTime: '18:00',
      shiftSubmitFrequency: '0.5m',
      timeUnit: 30,
      timeCardAuth: false,
    },
  })
  const { setError } = methods
  const {
    registerAdminUserAndShopMutation,
    loading,
    error,
    mutationSucceeded,
  } = useRegisterAdminUserAndShop()
  const { uid } = useRecoilValue(userInfoState)
  const router = useRouter()

  useEffect(() => {
    if (mutationSucceeded) {
      router.push('/dashboard')
    }
  }, [mutationSucceeded, router])

  useEffect(() => {
    if (error) {
      showCommonServerError()
    }
  }, [error])

  useEffect(() => {
    if (defaultStep !== -1) {
      setDefaultStep(_ => -1)
    }
  }, [defaultStep])

  const onSubmit: SubmitHandler<FormRegisterAdminType> = ({
    userName,
    shopName,
    openTime,
    closeTime,
    timeUnit,
    shiftSubmitFrequency,
    timeCardAuth,
  }) => {
    let errorMessage = ''
    let key: 'userName' | 'shopName' = ''
    if (!userName) {
      errorMessage = 'ユーザー名を入力してください'
      key = 'userName'

      setDefaultStep(0)
    } else if (!shopName) {
      errorMessage = '店舗名を入力してください'
      key = 'shopName'

      setDefaultStep(1)
    }
    if (errorMessage && key) {
      setError(key, { message: errorMessage })
      return
    }
    registerAdminUserAndShopMutation({
      variables: {
        userId: uid,
        userName,
        shopName,
        openTime,
        closeTime,
        timeUnit: timeUnit,
        submitFrequency: shiftSubmitFrequency,
        useTimeCard: timeCardAuth,
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
        <VStack {...props.vstack}>
          <FormShopName />
        </VStack>
        <VStack {...props.vstack}>
          <FormShiftRange />
          <FormSubmitFrequency />
          <FormTimeUnit />
        </VStack>
        <VStack {...props.vstack}>
          <FormTimeCardAuth />
        </VStack>
      </Step>
    </FormProvider>
  )
}
