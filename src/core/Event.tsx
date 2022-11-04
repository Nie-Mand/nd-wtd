export function Event(props: EventProps) {
  return (
    <>
      {props.open ? (
        <div
          className="fixed inset-0 z-10 bg-black/50 duration-300"
          onClick={props.closure}
        ></div>
      ) : null}
      <button
        onClick={props.onClick}
        className={`event ${props.tag.toLowerCase()} ${
          props.open ? 'opened' : ''
        } ${props.blink ? 'blinked' : ''}`}
      >
        <div className={`content ${props.open ? 'hover:bg-transparent' : ''}`}>
          <div className="flex space-x-2 items-center justify-between">
            <span className="when">14h-16h</span>
            {props.tag === 'uncategorized' ? null : (
              <span className="tag">{props.tag.toLowerCase()}</span>
            )}
          </div>
          <h1 className="title">{props.title}</h1>
          {props.open ? <p className="info">{props.info}</p> : null}
        </div>
      </button>
    </>
  )
}

export type Tags = 'study' | 'work' | 'meet' | 'uncategorized'

export interface EventProps {
  at: Date
  length: number
  title: string
  info: string
  tag: Tags
  className?: string
  open?: boolean
  blink?: boolean
  onClick?: () => void
  closure?: () => void
}
