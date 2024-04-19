'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Header } from '@/components/auth/header'
import { Social } from '@/components/auth/social'
import { BackButton } from '@/components/auth/back-button'

interface CardWrapperProps {
  children: React.ReactNode
  headerlabel: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
}

export const CardWrapper = ({
  children,
  headerlabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full sm:w-96">
        <CardHeader>
          <Header label={headerlabel} />
        </CardHeader>
        <CardContent>{children}</CardContent>
        {showSocial && (
          <CardFooter>
            <Social />
          </CardFooter>
        )}
        <CardFooter>
          <BackButton label={backButtonLabel} href={backButtonHref} />
        </CardFooter>
      </Card>
    </div>
  )
}
