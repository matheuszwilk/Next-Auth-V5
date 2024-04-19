import { GlobeDemo } from '@/components/auth/globe-form'
import { RegisterForm } from '@/components/auth/register-form'
import React from 'react'
const LoginPage = () => {
  return (
    <div className="lg:grid lg:h-full lg:w-full lg:grid-cols-2 xl:h-full xl:w-full xl:grid-cols-2">
      <div className="w-full flex flex-col items-center justify-center">
        <RegisterForm />
      </div>
      <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center bg-black">
        <h1 className="text-white flex flex-col gap-y-4 items-center justify-center text-center">
          <GlobeDemo />
        </h1>
      </div>
    </div>
  )
}

export default LoginPage
