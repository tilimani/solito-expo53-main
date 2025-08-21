'use client'

import { PropsWithChildren, useRef } from 'react'
import { useServerUnistyles } from 'react-native-unistyles/server'
import { useServerInsertedHTML } from 'next/navigation'
import './unistyles'

export const StylesProvider = ({ children }: PropsWithChildren) => {
  const isServerInserted = useRef(false)
  const unistyles = useServerUnistyles({ includeRNWStyles: false })

  useServerInsertedHTML(() => {
    if (isServerInserted.current) {
      return null
    }

    isServerInserted.current = true

    return unistyles
  })

  return <>{children}</>
}
