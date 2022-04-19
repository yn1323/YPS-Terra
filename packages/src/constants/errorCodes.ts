export const httpErrorCodes = [403, 404] as const
export type HttpErrorCodes = typeof httpErrorCodes[number]
