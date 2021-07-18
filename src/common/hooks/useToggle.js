import { useCallback, useState } from 'react'

const useToggle = (initialState = false) => {
  const [show, setShow] = useState(initialState)

  const toggle = useCallback(() => setShow((prev) => !prev), [])

  return [show, toggle]
}

export default useToggle
