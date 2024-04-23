import { Button } from '@/components/ui/button'
import { Roboto } from 'next/font/google'
import { cn } from '@/lib/utils'
import { LoginButton } from '@/components/auth/login-button'

const font = Roboto({ subsets: ['latin'], weight: ['500'] })

export default function Home() {
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-500 to-slate-800">
      <div className="space-y-6">
        <h1
          className={cn(
            'text-center text-6xl font-semibold text-white drop-shadow-md',
            font.className
          )}
        >
          🔒 AUTH
        </h1>
        <p className="text-lg text-white">A Simple Authetication Service</p>
      </div>
      <LoginButton mode={'modal'}>
        <Button variant={'secondary'} className="mt-6" size={'lg'}>
          Get Started
        </Button>
      </LoginButton>
    </main>
  )
}
