import { Card } from '@mantine/core'
import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'

export default function LinkCard({
  children,
  ...rest
}: { children: ReactElement } & LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  React.RefAttributes<HTMLAnchorElement>) {
  return (
    <Link {...rest} passHref legacyBehavior>
      <Card
        shadow='sm'
        padding='lg'
        radius='md'
        withBorder
        component='a'
        sx={{
          'transition': 'transform 0.2s ease-in-out',
          ':hover': {
            transform: 'scale(1.1)'
          }
        }}
      >
        {children}
      </Card>
    </Link>
  )
}
