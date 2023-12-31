import { afterLength, format } from '.'

export function Event(props: EventProps) {
  return (
    <>
      {props.open ? (
        <div
          className="fixed inset-0 z-10 bg-black/40 duration-300"
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
            <span className="when">
              {format(props.at)}-{afterLength(props.at, props.length)}
            </span>
            {props.tag === 'uncategorized' ? null : (
              <span className="tag">{props.tag.toLowerCase()}</span>
            )}
          </div>
          <h1 className="title">{props.title}</h1>
          {props.open ? (
            <>
              <div className="grid">
                <p className="info">{props.info}</p>
                <div className="h-10"></div>
                <a
                  href="#"
                  className="bg-white p-2 w-full rounded-md font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link
                </a>
              </div>
            </>
          ) : null}
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
  tag: Tags | string
  className?: string
  open?: boolean
  blink?: boolean
  onClick?: () => void
  closure?: () => void
}
