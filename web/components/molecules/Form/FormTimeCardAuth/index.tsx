import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { Switch } from '@/atoms/Button/Switch'
import { Form } from '@/templates/Form'

const LABEL = {
  switchOn: '一般ユーザーの入力を許可',
  switchOff: '管理ユーザーのみ入力を許可',
} as const

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  initialValue: boolean
  setter: (v: boolean) => void
}

export const FormTimeCardAuth: FC<PropTypes> = ({
  _css,
  initialValue,
  setter,
}) => {
  return (
    <Form css={[_css, styles.container]} definition="タイムカード入力権限">
      <Switch
        setter={setter}
        initialChecked={initialValue}
        labelOnFalse={LABEL.switchOff}
      >
        {LABEL.switchOn}
      </Switch>
    </Form>
  )
}
const styles = {
  container: css`
    width: 150px;
  `,
}
