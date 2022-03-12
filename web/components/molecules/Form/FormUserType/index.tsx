import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { Dispatch, FC, SetStateAction } from 'react'
import { Option, Radio } from '@/atoms/Input/Radio'
import { UserType } from '@/config/appConfigs'
import { Form } from '@/templates/Form'

const GROUP_NAME = 'USER_TYPE'
const OPTION: Option[] = [
  {
    value: 'admin',
    label: '管理ユーザー',
    note: '店舗管理者・シフト管理者はこちら',
  },
  {
    value: 'general',
    label: '一般ユーザー',
    note: '従業員・アルバイトはこちら',
  },
]

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  initialValue: UserType
  setter: Dispatch<SetStateAction<UserType>>
}

export const FormUserType: FC<PropTypes> = ({ _css, initialValue, setter }) => {
  return (
    <Form css={_css} definition="ユーザー種別">
      <Radio
        groupName={GROUP_NAME}
        initialValue={initialValue}
        options={OPTION}
        setter={setter as (v: string) => void}
      />
    </Form>
  )
}
const styles = {
  container: css``,
}
