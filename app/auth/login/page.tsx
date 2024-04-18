import { LoginForm } from '@/components/auth/login-form'
import React from 'react'
const LoginPage = () => {
  return (
    <div className="grid grid-cols-2 h-full w-full">
      <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <LoginForm />
      </div>
      <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center bg-black">
        <h1 className="text-white">CENTRAL GLOBE</h1>
      </div>
    </div>
  )
}

export default LoginPage
