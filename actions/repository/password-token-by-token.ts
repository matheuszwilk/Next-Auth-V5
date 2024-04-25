import { db } from '@/lib/db'

export const getForgotPasswordTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: { token },
    })
    return passwordResetToken
  } catch {
    return null
  }
}
