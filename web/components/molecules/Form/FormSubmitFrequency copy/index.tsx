import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Selectbox } from '@/atoms/Input/Selectbox'
import { ShiftTimeUnit } from '@/config/appConfigs'
import { TIME_UNIT } from '@/constants/validations'
import { Form } from '@/templates/Form'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  initialValue: ShiftTimeUnit
  setter: Dispatch<SetStateAction<ShiftTimeUnit>>
}

export const FormTimeUnit: FC<PropTypes> = ({ _css, initialValue, setter }) => {
  return (
    <Form css={[_css, styles.container]} definition="シフト作成時間単位">
      <Selectbox
        _css={styles.container}
        options={TIME_UNIT}
        setter={setter as (v: string) => void}
        initialValue={initialValue}
      />
    </Form>
  )
}
const styles = {
  container: css`
    width: 150px;
  `,
}
