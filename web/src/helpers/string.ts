import dayjs, { Dayjs } from 'dayjs'

export const timeStringToDate = (str: string) => {
  const [hours, minutes] = str.split(':')
  const d = dayjs()
    .set('hour', parseInt(hours))
    .set('minute', parseInt(minutes))
  return d
}

export const dataToTimeString = (d: Dayjs) => {
  const hours = d.get('hour')
  const minutes = d.get('minute')
  return `${hours}:${minutes}`
}
