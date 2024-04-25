import { db } from '@/lib/db'

export const getForgotPasswordTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: { email },
    })
    return passwordResetToken
  } catch {
    return null
  }
}
