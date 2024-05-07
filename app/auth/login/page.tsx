import { GlobeLogin } from '@/components/auth/globe-form'
import { LoginForm } from '@/components/auth/login-form'
import React from 'react'
import { Suspense } from 'react'

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="lg:grid lg:h-full lg:w-full lg:grid-cols-2 xl:h-full xl:w-full xl:grid-cols-2">
        <div className="w-full flex-col gap-y-4 items-center justify-center bg-muted lg:block hidden">
          <GlobeLogin />
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <LoginForm />
        </div>
      </div>
    </Suspense>
  )
}

export default LoginPage
