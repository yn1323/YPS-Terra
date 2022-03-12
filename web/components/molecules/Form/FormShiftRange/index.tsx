import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Dayjs } from 'dayjs'
import { FC, SetStateAction, Dispatch } from 'react'
import { PickerTime } from '@/atoms/Input/PickerTime'
import { ShiftTime } from '@/config/appConfigs'
import { Form } from '@/templates/Form'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  startInitialValue: Dayjs
  startTimeSetter: Dispatch<SetStateAction<ShiftTime>>
  endInitialValue: Dayjs
  endTimeSetter: Dispatch<SetStateAction<ShiftTime>>
}

export const FormShiftRange: FC<PropTypes> = ({
  _css,
  startInitialValue,
  startTimeSetter,
  endInitialValue,
  endTimeSetter,
}) => {
  return (
    <Form css={_css} position="bottom" definition="シフト設定可能時間">
      <div css={styles.container}>
        <div css={styles.pickerWrapper}>
          <PickerTime
            defaultTime={startInitialValue}
            setter={startTimeSetter}
            label="開始時間"
          />
        </div>
        <div css={styles.delimeter} />
        <div css={styles.pickerWrapper}>
          <PickerTime
            defaultTime={endInitialValue}
            setter={endTimeSetter}
            label="終了時間"
          />
        </div>
      </div>
    </Form>
  )
}

const styles = {
  container: css`
    display: flex;
    position: relative;
    align-items: center;
  `,
  pickerWrapper: css`
    width: 200px;
  `,
  delimeter: css`
    display: flex;
    width: 40px;
    position: relative;
    align-items: center;
    justify-content: center;
    &:before {
      content: '〜';
      font-size: 0.9rem;
      position: absolute;
      margin-top: 12px;
    }
  `,
}
