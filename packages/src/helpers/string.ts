export const getCookieValue = (str?: string, key = 'yps-token') => {
  if (!str || !str.includes(' ')) {
    return ''
  }
  const keyValue = str.split(' ').find(s => s.includes(`${key}=`))
  return keyValue?.replace(`${key}=`, '') ?? ''
}
