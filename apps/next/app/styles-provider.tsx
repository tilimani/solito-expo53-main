'use client'

import { PropsWithChildren, useRef } from 'react'
import { useServerUnistyles } from 'react-native-unistyles/server'
import { useServerInsertedHTML } from 'next/navigation'
import './unistyles'
import { StyleSheet } from 'react-native'

export const StylesProvider = ({ children }: PropsWithChildren) => {
  const isServerInserted = useRef(false)
  const unistyles = useServerUnistyles({ includeRNWStyles: false })

  useServerInsertedHTML(() => {
    console.log('try styles', isServerInserted.current)
    if (isServerInserted.current) {
      return null
    }
    isServerInserted.current = true
    // const sheet = StyleSheet.getSheet?.()

    console.log('inserted styles', isServerInserted.current)

    return (
      <>
        {/* {sheet && <style dangerouslySetInnerHTML={{ __html: sheet.textContent }} id={sheet.id} />} */}
        {unistyles}
      </>
    )
  })

  return <>{children}</>
}
