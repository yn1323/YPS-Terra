import type { SerializedStyles } from '@emotion/react'
import { FC, Fragment, useMemo } from 'react'
import { Snackbar } from '@/atoms/Text/Snackbar'
import { replaceToBrTag } from '@/localHelpers/react'

type PropTypes = {
  _css?: SerializedStyles | SerializedStyles[]
  show: boolean
  children?: string | JSX.Element
}

export const NotificationError: FC<PropTypes> = ({ _css, show, children }) => {
  const message = useMemo(() => {
    const propMsg =
      typeof children === 'string' ? (
        <Fragment>{replaceToBrTag(children)}</Fragment>
      ) : (
        children
      )
    return (
      propMsg || (
        <Fragment>
          エラーが発生しました。
          <br />
          もう一度試していただくか、しばらく時間をおいてください。
        </Fragment>
      )
    )
  }, [children])

  return (
    <Snackbar show={show} severity="error">
      {message}
    </Snackbar>
  )
}
