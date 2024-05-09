import { auth, signOut } from '@/auth'

const SettingsPage = async () => {
  const session = await auth()

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault()
    await signOut({ redirectTo: '/auth/login' })
  }

  return (
    <div>
      {JSON.stringify(session)}
      <form>
        <button type="submit" onClick={handleLogout}>
          Logout
        </button>
      </form>
    </div>
  )
}

export default SettingsPage
