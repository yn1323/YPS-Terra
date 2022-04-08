import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { Toggle } from '@/atoms/Button/Toggle'
import { Form } from '@/templates/Form'

const Label = ['管理者のみ', '全員可']

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
  const localSetter = (v: string) => {
    setter(v === Label[0])
  }

  return (
    <Form css={[_css, styles.container]} definition="タイムカード入力権限">
      <Toggle
        values={Label}
        initialValue={initialValue ? Label[0] : Label[1]}
        setter={localSetter}
      ></Toggle>
    </Form>
  )
}
const styles = {
  container: css`
    width: 150px;
  `,
}
