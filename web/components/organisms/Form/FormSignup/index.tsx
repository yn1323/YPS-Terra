import { css } from '@emotion/react'
import type { SerializedStyles } from '@emotion/react'
import { FC } from 'react'
import { Heading } from '@/atoms/Text/Heading'
import { useCheckUserExist } from '@/hooks/useCheckUserExist'
import { FormLoginInput } from '@/molecules/Form/FormLoginInput'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
}

export const FormSignup: FC<PropTypes> = ({ _css }) => {
  const { isValidating, data } = useCheckUserExist()

  return (
    <div css={_css}>
      <Heading _css={styles.title} center underline variant="h1">
        登録
      </Heading>
      <div css={styles.container}>
        <FormLoginInput isSignUp loading={isValidating} />
      </div>
    </div>
  )
}
const styles = {
  container: css`
    display: flex;
    justify-content: center;
  `,
  title: css`
    margin-bottom: 40px;
  `,
}
