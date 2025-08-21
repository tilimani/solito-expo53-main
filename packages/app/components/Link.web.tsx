import NextLink from 'next/link'

import { LinkProps } from 'solito/link'

type Props = LinkProps & {
  asChild?: boolean // Optional: for ExpoLink behavior
}

export function Link({ href, children, asChild }: Props) {
  return <NextLink href={href}>{children}</NextLink>
}
