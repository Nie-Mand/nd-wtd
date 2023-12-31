import Gun from 'gun'
import { useEffect, useState } from 'react'

const gun = Gun()

export function useGun() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const event = {
      is: 'work',
      title: 'Tiitle',
      info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error suscipit',
      at: new Date(2022, 10, 5, 10),
      length: 4,
    }

    // const item = gun.get('niemand:what:to:do').put({
    //   owner: 'N1mxnd',
    // })

    console.log('owner', gun.get('niemand:what:to:do').get('owner'))

    // item.set(event)

    // item.on(data => {
    //   setEvents(data)
    // })

    // return () => {
    //   item.off()
    // }
  }, [])
}
