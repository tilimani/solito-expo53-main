'use client'

import { MotiLink } from 'solito/moti/app'
import { Text, View } from 'react-native'
import { Link } from 'app/components/Link'
import TestComponent from 'app/components/TestComponent'

export function HomeScreen() {
  return <TestComponent />
}

const H1 = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ fontWeight: '800', fontSize: 24 }}>{children}</Text>
}

const P = ({ children }: { children: React.ReactNode }) => {
  return <Text style={{ textAlign: 'center' }}>{children}</Text>
}
