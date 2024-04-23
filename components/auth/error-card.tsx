import { Header } from '@/components/auth/header'
import { BackButton } from '@/components/auth/back-button'
import { Card, CardFooter, CardHeader } from '@/components/ui/card'
import { CardWrapper } from './card-wrapper'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerlabelMain="Error"
      headerlabel="Opps! Something went wrong"
      backButtonLabel="Back to Home"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <div className="flex justify-center w-full items-center ">
        <ExclamationTriangleIcon className="text-[#a50034] h-10 w-10" />
      </div>
    </CardWrapper>
  )
}
