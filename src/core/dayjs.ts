import dayjs from 'dayjs'
import en from 'dayjs/locale/en'
import { useCallback, useEffect, useMemo, useState } from 'react'

dayjs.locale({
  ...en,
  weekStart: 1,
})

export const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
]

export function afterLength(d: Date, n: number) {
  return dayjs(d)
    .add(n * 15, 'minutes')
    .format('HH:mm')
}

export function format(d: Date) {
  return dayjs(d).format('HH:mm')
}

export function useDates() {
  const [date, setDate] = useState(dayjs())
  const weeks = useMemo(() => getWeek(date), [date])

  const next = useCallback(() => {
    setDate(dayjs(date).add(1, 'week'))
  }, [setDate, date])

  const previous = useCallback(() => {
    setDate(dayjs(date).subtract(1, 'week'))
  }, [setDate, date])

  return { weeks, next, previous }
}

function getWeek(d: dayjs.Dayjs) {
  const monday = dayjs(d).startOf('week').format('DD MMM')

  return {
    monday,
    tuesday: dayjs(monday).add(1, 'day').format('DD MMM'),
    wednesday: dayjs(monday).add(2, 'day').format('DD MMM'),
    thursday: dayjs(monday).add(3, 'day').format('DD MMM'),
    friday: dayjs(monday).add(4, 'day').format('DD MMM'),
    saturday: dayjs(monday).add(5, 'day').format('DD MMM'),
    sunday: dayjs(monday).add(6, 'day').format('DD MMM'),
  } as any
}
