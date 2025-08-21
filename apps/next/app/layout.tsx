import './globals.css'
import type { Metadata } from 'next'
import { StylesProvider } from './styles-provider'
import './unistyles'

export const metadata: Metadata = {
  title: 'Tamagui • App Router',
  description: 'Tamagui, Solito, Expo & Next.js',
  icons: '/favicon.ico',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // You can use `suppressHydrationWarning` to avoid the warning about mismatched content during hydration in dev mode
    <html lang="en" suppressHydrationWarning className="dark">
      <body>
        <StylesProvider>{children}</StylesProvider>
      </body>
    </html>
  )
}
