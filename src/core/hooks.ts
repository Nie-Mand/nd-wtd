import { useCallback, useState } from 'react'

export function useOpenAndBlink() {
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
