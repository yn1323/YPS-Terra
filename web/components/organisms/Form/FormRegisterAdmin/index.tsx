import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC, useRef, useState } from 'react'
import { Button } from '@/atoms/Button/Button'
import { Heading } from '@/atoms/Text/Heading'
import {
  ShiftSubmitFrequency,
  ShiftTime,
  ShiftTimeUnit,
  SHOP_CONFIG,
  TimeCardAuth,
  UserType,
  USER_CONFIG,
} from '@/config/appConfigs'
import { FORM_ERROR_TEXT } from '@/constants/validations'
import { FormShiftRange } from '@/molecules/Form/FormShiftRange'
import { FormShopName } from '@/molecules/Form/FormShopName'
import { FormSubmitFrequency } from '@/molecules/Form/FormSubmitFrequency'
import { FormTimeCardAuth } from '@/molecules/Form/FormTimeCardAuth'
import { FormTimeUnit } from '@/molecules/Form/FormTimeUnit'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { Stepper } from '@/templates/Stepper'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormRegisterAdmin: FC<PropTypes> = ({ _css }) => {
  const StepperLabels = ['ユーザー名', '店舗情報設定', 'シフト設定', '権限設定']
  const [startShiftTime, setStartShiftTime] = useState<ShiftTime>(
    SHOP_CONFIG.startShiftTime
  )
  const [endShiftTime, setEndShiftTime] = useState<ShiftTime>(
    SHOP_CONFIG.endShiftTime
  )
  const [shiftTimeUnit, setShiftTimeUnit] = useState<ShiftTimeUnit>(
    SHOP_CONFIG.shiftTimeUnit
  )
  const [shiftSubmitFrequency, setShiftSubmitFrequency] =
    useState<ShiftSubmitFrequency>(SHOP_CONFIG.shiftSubmitFrequency)
  const [timeCardAuth, setTimeCardAuth] = useState<TimeCardAuth>(false)

  const [userName, setUserName] = useState('')
  const [shopName, setShopName] = useState('')

  const userNameRef = useRef<HTMLInputElement>(null)
  const shopNameRef = useRef<HTMLInputElement>(null)

  const stepHandler = (_: number, prevStep: number) => {
    if (prevStep === 0) {
      setUserName(userNameRef.current?.value ?? '')
    } else if (prevStep === 1) {
      setShopName(shopNameRef.current?.value ?? '')
    }
  }

  const [success, setSuccess] = useState({
    userName: true,
    shopName: true,
  })

  const handleSubmit = () => {
    const targetValidation = [userName, shopName]
    const allSuccess = targetValidation?.every(v => v)
    if (!allSuccess) {
      setSuccess({
        userName: !!userName,
        shopName: !!shopName,
      })
    }
  }

  return (
    <div css={[_css, styles.container]}>
      <Heading underline>YPS初期設定</Heading>

      <Stepper
        labels={StepperLabels}
        validationMessage={() => 'hoge'}
        completed={() => console.log('completed')}
        _contentCss={styles.content}
        onStepChanged={stepHandler}
      >
        <section css={styles.section}>
          <div css={styles.items}>
            <FormUserName
              error={!success.userName}
              helperText={FORM_ERROR_TEXT.USER_NAME}
              ref={userNameRef}
              defaultValue={userName}
            />
          </div>
        </section>

        <section css={styles.section}>
          <div css={styles.items}>
            <FormShopName
              error={!success.shopName}
              helperText={FORM_ERROR_TEXT.SHOP_NAME}
              ref={shopNameRef}
              defaultValue={shopName}
            />
          </div>
        </section>

        <section css={styles.section}>
          <div css={styles.items}>
            <FormShiftRange
              startInitialValue={startShiftTime}
              startTimeSetter={setStartShiftTime}
              endInitialValue={endShiftTime}
              endTimeSetter={setEndShiftTime}
            />
            <FormTimeUnit
              initialValue={shiftTimeUnit}
              setter={setShiftTimeUnit}
            />
            <FormSubmitFrequency
              initialValue={shiftSubmitFrequency}
              setter={setShiftSubmitFrequency}
            />
          </div>
        </section>

        <section css={styles.section}>
          <div css={styles.items}>
            <FormTimeCardAuth
              initialValue={timeCardAuth}
              setter={setTimeCardAuth}
            />
          </div>
        </section>
      </Stepper>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
  `,
  section: css`
    margin-bottom: 32px;
    ${mediaQueries('sm')} {
      margin-bottom: 48px;
    }
  `,
  items: css`
    > * {
      margin: 24px 0;
      ${mediaQueries('sm')} {
        margin: 12px 0;
      }
    }
  `,
  description: css`
    margin-top: 4px;
  `,

  content: css`
    height: 300px;
    padding-top: 20px;
  `,
}
