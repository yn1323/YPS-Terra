import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { useRouter } from 'next/router'
import { FC, useEffect, useRef, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Heading } from '@/atoms/Text/Heading'
import {
  ShiftSubmitFrequency,
  ShiftTime,
  ShiftTimeUnit,
  SHOP_CONFIG,
  TimeCardAuth,
} from '@/config/appConfigs'
import { FORM_ERROR_TEXT } from '@/constants/validations'
import { FormShiftRange } from '@/molecules/Form/FormShiftRange'
import { FormShopName } from '@/molecules/Form/FormShopName'
import { FormSubmitFrequency } from '@/molecules/Form/FormSubmitFrequency'
import { FormTimeCardAuth } from '@/molecules/Form/FormTimeCardAuth'
import { FormTimeUnit } from '@/molecules/Form/FormTimeUnit'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { userInfoState } from '@/recoil/userInfo'
import { useRegisterAdminUserAndShop } from '@/services/register/registerAdminUserAndShop'
import { Stepper } from '@/templates/Stepper'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormRegisterAdmin: FC<PropTypes> = ({ _css }) => {
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

  const [moveStep, setMoveStep] = useState<undefined | number>(undefined)
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
    registerAdminUserAndShopMutation({
      variables: {
        userId: uid,
        userName,
        shopName,
        openTime: startShiftTime,
        closeTime: endShiftTime,
        timeUnit: parseInt(shiftTimeUnit, 10),
        submitFrequency: shiftTimeUnit,
        useTimeCard: timeCardAuth,
      },
    })
  }

  const validationMessage = () => {
    const targetValidation = [userName, shopName]
    const allSuccess = targetValidation?.every(v => v)
    if (!allSuccess) {
      setSuccess({
        userName: !!userName,
        shopName: !!shopName,
      })
      if (!userName) {
        setMoveStep(0)
        return FORM_ERROR_TEXT.USER_NAME
      } else if (!shopName) {
        setMoveStep(1)
        return FORM_ERROR_TEXT.SHOP_NAME
      }
    }
    return ''
  }

  useEffect(() => {
    if (moveStep !== undefined) {
      setMoveStep(undefined)
    }
  }, [moveStep])

  return (
    <div css={[_css, styles.container]}>
      <Heading underline>YPS初期設定</Heading>

      <Stepper
        labels={StepperLabels}
        validationMessage={validationMessage}
        completed={handleSubmit}
        _contentCss={styles.content}
        onStepChanged={stepHandler}
        moveStep={moveStep}
        loading={loading}
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
