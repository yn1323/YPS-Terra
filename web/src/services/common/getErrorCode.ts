import { HttpErrorCodes } from '@/constants/errorCodes'

export const getErrorCode = (errors: any): 0 | HttpErrorCodes | number => {
  if (!errors) {
    return 0
  }
  try {
    const code = errors[0].extensions.code
    if (code === 'FORBIDDEN') return 403
    return code.parseInt(code, 10)
  } catch {}
  return 500
}
