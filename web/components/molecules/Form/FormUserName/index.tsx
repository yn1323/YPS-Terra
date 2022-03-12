import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC, forwardRef } from 'react'
import { Textbox, PropTypes as TextboxProps } from '@/atoms/Input/Textbox'
import { MAX_LENGTH } from '@/constants/validations'
import { Form } from '@/templates/Form'

const PLACEHOLDER = '〇〇 XX'
const LENGTH = MAX_LENGTH.USER_NAME

type PropTypes = Pick<
  TextboxProps,
  Partial<'error' | 'defaultValue' | 'required' | 'helperText'> | 'ref'
> & {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormUserName: FC<PropTypes> = forwardRef(
  (
    {
      _css,
      error = false,
      defaultValue = '',
      required = false,
      helperText = '',
    },
    ref
  ) => {
    return (
      <Form css={[_css, styles.container]} definition="ユーザー名">
        <Textbox
          maxLength={LENGTH}
          placeholder={PLACEHOLDER}
          error={error}
          defaultValue={defaultValue}
          required={required}
          helperText={helperText}
          ref={ref}
        />
      </Form>
    )
  }
)

const styles = {
  container: css``,
}
