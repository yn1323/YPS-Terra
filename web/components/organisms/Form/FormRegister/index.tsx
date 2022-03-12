import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC, useMemo, useRef, useState } from 'react'
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
import { FormShopId } from '@/molecules/Form/FormShopId'
import { FormShopName } from '@/molecules/Form/FormShopName'
import { FormSubmitFrequency } from '@/molecules/Form/FormSubmitFrequency'
import { FormTimeCardAuth } from '@/molecules/Form/FormTimeCardAuth'
import { FormTimeUnit } from '@/molecules/Form/FormTimeUnit'
import { FormUserName } from '@/molecules/Form/FormUserName'
import { FormUserType } from '@/molecules/Form/FormUserType'
import { mediaQueries } from '@/ui/mixins/breakpoint'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormRegister: FC<PropTypes> = ({ _css }) => {
  const [userType, setUserType] = useState<UserType>(USER_CONFIG.userType)
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

  const userNameRef = useRef<HTMLInputElement>(null)
  const shopNameRef = useRef<HTMLInputElement>(null)
  const shopIdRef = useRef<HTMLInputElement>(null)

  const [success, setSuccess] = useState({
    userName: true,
    shopId: true,
    shopName: true,
  })

  const isAdmin = useMemo(() => userType === 'admin', [userType])

  const handleSubmit = () => {
    let targetValidation
    if (userType === 'general') {
      targetValidation = [userNameRef.current?.value, shopIdRef.current?.value]
    } else if (userType === 'admin') {
      targetValidation = [
        userNameRef.current?.value,
        shopNameRef.current?.value,
      ]
    }
    const allSuccess = targetValidation?.every(v => v)
    if (!allSuccess) {
      setSuccess({
        userName: !!userNameRef.current?.value,
        shopId: !!shopIdRef.current?.value ?? true,
        shopName: !!shopNameRef.current?.value ?? true,
      })
    }
  }

  return (
    <div css={[_css, styles.container]}>
      <section css={styles.section}>
        <Heading type="sub" underline>
          YPS初期設定
        </Heading>
        <Heading type="description">
          <p css={styles.description}>
            YPSユーザーと店舗の設定を行います。
            <br />
            設定内容は後からでも変更できます。
          </p>
        </Heading>
        <div css={styles.items}>
          <FormUserType initialValue={userType} setter={setUserType} />
          <FormUserName
            error={!success.userName}
            helperText={FORM_ERROR_TEXT.USER_NAME}
            ref={userNameRef}
          />

          {!isAdmin && (
            <FormShopId
              error={!success.shopId}
              helperText={FORM_ERROR_TEXT.SHOP_ID}
              ref={shopIdRef}
            />
          )}
        </div>
      </section>

      {isAdmin && (
        <section css={styles.section}>
          <Heading type="sub" underline>
            店舗情報設定
          </Heading>
          <div css={styles.items}>
            <FormShopName
              error={!success.shopName}
              helperText={FORM_ERROR_TEXT.SHOP_NAME}
              ref={shopNameRef}
            />
          </div>
        </section>
      )}

      {isAdmin && (
        <section css={styles.section}>
          <Heading type="sub" underline>
            シフト設定
          </Heading>
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
      )}

      {isAdmin && (
        <section css={styles.section}>
          <Heading type="sub" underline>
            権限設定
          </Heading>
          <div css={styles.items}>
            <FormTimeCardAuth
              initialValue={timeCardAuth}
              setter={setTimeCardAuth}
            />
          </div>
        </section>
      )}
      <div>
        <Button onClick={handleSubmit}>設定完了</Button>
      </div>
    </div>
  )
}

const styles = {
  container: css`
    width: 100%;
    ${mediaQueries('sm')} {
      width: 66%;
    }
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
  submitButton: css`
    display: flex;
    justify-content: flex-end;
  `,
}
