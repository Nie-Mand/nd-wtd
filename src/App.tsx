import { Event, days, useOpenAndBlink, useDates, use8 } from './core'

const data = [
  {
    id: 1,
    is: 'work',
    title: 'Tiitle',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error suscipit',
    at: new Date(),
    length: 4,
  },
  {
    id: 2,
    is: 'study',
    title: 'Tiitle',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error suscipit',
    at: new Date(),
    length: 4,
  },
  {
    id: 3,
    is: 'meet',
    title: 'Tiitle',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error suscipit',
    at: new Date(),
    length: 4,
  },
]

function App() {
  const handler = useOpenAndBlink()
  const { weeks, next, previous } = useDates()
  const events = use8(weeks[0], weeks[6])

  console.log(events)

  return (
    <div className="root">
      <h1 className="text-xl text-white text-center pt-5 pb-5 flex items-center space-x-2 justify-center">
        <span className="cool">N1mXnd WhaTTodoos</span>
        <button
          onClick={previous}
          className="text-sm bg-white text-[#1e1e1e] px-2 py-1 rounded-md font-medium"
        >
          Previous
        </button>
        <button
          onClick={next}
          className="text-sm bg-white text-[#1e1e1e] px-2 py-1 rounded-md font-medium"
        >
          Next
        </button>
      </h1>
      <div className="snap-x">
        <div className="grid grid-cols-7 rounded-md">
          {days.map(d => (
            <div key={d} className="day">
              <div className="date">{weeks[d]}</div>
              {d}
            </div>
          ))}
        </div>
        <div className="my-5 text-white divide-x grid grid-cols-7 divide-[#1e1e1e] h-rest">
          {days.map(d => (
            <div className="events" key={d}>
              {data.map(d => (
                <Event
                  key={d.id}
                  tag={d.is}
                  title={d.title}
                  info={d.info}
                  at={d.at}
                  length={d.length}
                  open={handler.isOpen(d.id)}
                  blink={handler.isBlinked(d.id)}
                  onClick={() => handler.open(d.id)}
                  closure={handler.close}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
