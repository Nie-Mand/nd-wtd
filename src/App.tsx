import { useCallback, useMemo, useState } from 'react'
import { Event } from './core'

function useOpenAndBlink() {
  const [v, setV] = useState<null | number>(null)

  const isBlinked = useCallback(
    (_v: number) => {
      if (v === null) return false
      return _v !== v
    },
    [v]
  )

  const isOpen = useCallback(
    (_v: number) => {
      if (v === null) return false
      return _v === v
    },
    [v]
  )

  const open = useCallback(
    (_v: number) => {
      setV(_v)
    },
    [setV]
  )

  const close = useCallback(() => {
    setV(null)
  }, [setV])

  return {
    open,
    close,
    isOpen,
    isBlinked,
  }
}

function App() {
  const handler = useOpenAndBlink()

  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ]

  function dayWhen(d: string) {
    return '06 OCT'
  }
  return (
    <div className="root">
      <h1 className="cool text-xl text-white text-center pt-5 pb-5">
        N1mXnd WhaTTodoos
      </h1>
      <div className="grid grid-cols-7 rounded-md ">
        {days.map(d => (
          <div key={d} className="day">
            <div className="date">{dayWhen(d)}</div>
            {d}
          </div>
        ))}
      </div>
      <div className="my-5 text-white divide-x grid grid-cols-7 divide-[#1e1e1e] h-rest">
        <div className="events">
          <Event
            tag="study"
            title="Tiitle"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            error suscipit"
            at={new Date()}
            length={4}
            open={handler.isOpen(1)}
            blink={handler.isBlinked(1)}
            onClick={() => handler.open(1)}
            closure={handler.close}
          />
          <Event
            tag="work"
            title="Tiitle"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            error suscipit"
            at={new Date()}
            length={4}
            open={handler.isOpen(2)}
            blink={handler.isBlinked(2)}
            onClick={() => handler.open(2)}
            closure={handler.close}
          />
          <Event
            tag="meet"
            title="Tiitle"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            error suscipit"
            at={new Date()}
            length={4}
            open={handler.isOpen(3)}
            blink={handler.isBlinked(3)}
            onClick={() => handler.open(3)}
            closure={handler.close}
          />
        </div>
        <div className="events">
          <Event
            tag="uncategorized"
            title="Tiitle"
            info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            error suscipit"
            at={new Date()}
            length={4}
            open={handler.isOpen(4)}
            blink={handler.isBlinked(4)}
            onClick={() => handler.open(4)}
            closure={handler.close}
          />
        </div>
        <div className="events"></div>
        <div className="events"></div>
        <div className="events"></div>
        <div className="events"></div>
        <div className="events"></div>
      </div>
    </div>
  )
}

export default App
