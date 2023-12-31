import Api from '@8base-js-sdk/api'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'

export const config = {
  workspaceId: 'cla44jqi0014e08l3e3pa3ydm',
  headers: {
    Authorization: 'Bearer ecb7b249-ecd5-4023-a451-ae2ad0a0a8ca',
  },
}

const app = new Api(config)

export function use8(_from: dayjs.Dayjs, _to: dayjs.Dayjs) {
  const [events, setEvents] = useState([])

  const filteredEvents = useMemo(() => {
    return events.filter((event: any) => {
      const from = dayjs(event.from)
      const to = dayjs(event.to)

      console.log(event.at, _from, _to)
      console.log(event.at.isAfter(from), event.at.isBefore(to))

      return event.at.isAfter(from) && event.at.isBefore(to)
    })
  }, [events, _from, _to])

  useEffect(() => {
    app
      .query(
        `
        {
            thingsList {
              items {
                id
                at
                is
                title
                info
                length
                link
              }
            }
          }
        `
      )
      .then(({ data }) => {
        if (data && data.thingsList) {
          setEvents(
            data.thingsList.items.map((item: any) => ({
              ...item,
              at: dayjs(Number(item.at)),
              day: dayjs(Number(item.at)).format('dddd'),
            }))
          )
        }
      })
  }, [])

  return filteredEvents
}
