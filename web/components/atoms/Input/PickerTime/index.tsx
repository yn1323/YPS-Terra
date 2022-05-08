import { Select } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { FC, useMemo } from 'react'
import { ShiftTimeUnit } from '@/constants/validations'

type PropTypes = {
  placeholder: string
  startTime: string
  endTime: string
  step?: ShiftTimeUnit
}

export const PickerTime: FC<PropTypes> = ({
  placeholder,
  startTime,
  endTime,
  step = 5,
}) => {
  const time = useMemo(
    () => ({
      startTime: dayjs()
        .set('hour', parseInt(startTime.split(':')[0]))
        .set('minute', parseInt(startTime.split(':')[1])),
      endTime: dayjs()
        .set('hour', parseInt(endTime.split(':')[0]))
        .set('minute', parseInt(endTime.split(':')[1])),
    }),
    [startTime, endTime]
  )
  const isOverMidnight = time.startTime.isAfter(time.endTime)
  const listTimeBetweenStartAndEndByStep = useMemo(() => {
    const list = []
    const start = isOverMidnight ? time.endTime : time.startTime
    const end = isOverMidnight ? time.startTime : time.endTime

    for (
      let date = start;
      date.isBefore(end) || date.isSame(end);
      date = date.add(step, 'minute')
    ) {
      list.push(date.format('HH:mm'))
    }

    return list
  }, [isOverMidnight, time, step])

  return (
    <Select placeholder={placeholder}>
      {listTimeBetweenStartAndEndByStep.map((time, i) => (
        <option value={time} key={i}>
          {time}
        </option>
      ))}
    </Select>
  )
}
