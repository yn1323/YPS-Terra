import { HttpErrorCodes } from '@/constants/errorCodes'

// eslint-disable-next-line
export const getErrorCode = (errors: any): 0 | HttpErrorCodes | number => {
  if (!errors) {
    return 200
  }
  try {
    const code = errors[0].extensions.code
    if (code === 'FORBIDDEN') return 403
    return code.parseInt(code, 10)
  } catch {}
  return 500
}
