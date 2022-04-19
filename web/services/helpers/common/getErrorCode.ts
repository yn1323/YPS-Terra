import { HttpErrorCodes } from '@/constants/errorCodes'

// eslint-disable-next-line
export const getErrorCode = (errors: any): 0 | HttpErrorCodes | number => {
  if (!errors) {
    return 200
  }
  // NOTE: client, serverでエラーAppoloClientのエラーオブジェクトが異なる
  const errorObj = errors.graphQLErrors || errors
  try {
    const code = errorObj[0].extensions.code
    if (code === 'FORBIDDEN') return 403
    if (code === '404') return 404
    return code.parseInt(code, 10)
  } catch (e) {
    console.error(e)
  }
  return 500
}
