import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Selectbox } from '@/atoms/Input/Selectbox'
import { ShiftSubmitFrequency } from '@/config/appConfigs'
import { SUBMIT_FREQUENCY } from '@/constants/validations'
import { Form } from '@/templates/Form'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  initialValue: ShiftSubmitFrequency
  setter: Dispatch<SetStateAction<ShiftSubmitFrequency>>
}

export const FormSubmitFrequency: FC<PropTypes> = ({
  _css,
  initialValue,
  setter,
}) => {
  return (
    <Form css={[_css, styles.container]} definition="シフト提出頻度">
      <Selectbox
        _css={styles.container}
        options={SUBMIT_FREQUENCY}
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
