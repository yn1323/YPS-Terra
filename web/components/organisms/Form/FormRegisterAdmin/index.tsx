import { VStack } from '@chakra-ui/react'
import { Dayjs } from 'dayjs'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ShiftSubmitFrequency, ShiftTimeUnit } from '@/constants/validations'
import { FormShopName } from '@/molecules/Form/FormShopName'
import { FormSubmitFrequency } from '@/molecules/Form/FormSubmitFrequency'
import { FormTimeCardAuth } from '@/molecules/Form/FormTimeCardAuth'
import { FormTimeUnit } from '@/molecules/Form/FormTimeUnit'
import { FormUserName } from '@/molecules/Form/FormUserName'
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
  const labels = ['ユーザー名', '店舗情報', 'シフト設定', '権限設定']
  const methods = useForm<FormRegisterAdminType>()

  const onSubmit = (values: FormRegisterAdminType) => {
    console.log('OK')
    console.log(values)
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
      <Step labels={labels} onSubmit={onSubmit}>
        <VStack {...props.vstack}>
          <FormUserName />
        </VStack>
        <VStack {...props.vstack}>
          <FormShopName />
        </VStack>
        <VStack {...props.vstack}>
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
