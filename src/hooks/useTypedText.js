import { useEffect, useState } from 'react'

export default function useTypedText(fullText, options = {}) {
  const { speed = 55, delay = 180 } = options
  const [value, setValue] = useState(fullText)

  useEffect(() => {
    if (typeof window === 'undefined') {
      setValue(fullText)
      return undefined
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setValue(fullText)
      return undefined
    }

    let typingTimeout
    let startTimeout
    let index = 0
    setValue('')

    const type = () => {
      setValue(fullText.slice(0, index + 1))
      index += 1
      if (index < fullText.length) {
        typingTimeout = window.setTimeout(type, speed)
      }
    }

    startTimeout = window.setTimeout(type, delay)

    return () => {
      window.clearTimeout(startTimeout)
      window.clearTimeout(typingTimeout)
    }
  }, [fullText, speed, delay])

  return value
}
