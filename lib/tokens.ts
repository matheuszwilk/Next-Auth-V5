import { v4 as uuidv } from 'uuid'

import { db } from '@/lib/db'
import { getVerificationTokenByEmail } from '@/actions/repository/verification-token-by-email'
import { getForgotPasswordTokenByEmail } from '@/actions/repository/password-token-by-email'

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getForgotPasswordTokenByEmail(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return passwordResetToken
}

export const genereteVerificationToken = async (email: string) => {
  const token = uuidv()
  const expires = new Date(new Date().getTime() + 3600 * 1000)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return verificationToken
}
