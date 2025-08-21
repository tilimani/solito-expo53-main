import { useEffect } from 'react'

import { SplashScreen, Stack } from 'expo-router'
import { Provider } from 'app/provider'

export const unstable_settings = {
  // Ensure that reloading on `/user` keeps a back button present.
  initialRouteName: 'Home',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function App() {
  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <Provider>
      <Stack />
    </Provider>
  )
}
