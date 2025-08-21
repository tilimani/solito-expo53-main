import { Link as ExpoLink } from 'expo-router'

import { LinkProps } from 'solito/link'

type Props = LinkProps & {
  asChild?: boolean
}

export function Link({ href, children, asChild }: Props) {
  return (
    <ExpoLink href={href} asChild={asChild}>
      {children}
    </ExpoLink>
  )
}
