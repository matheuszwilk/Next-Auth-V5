'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { ResetPasswordSchema } from '@/schemas/reset-password'
import { getForgotPasswordTokenByToken } from '@/actions/repository/password-token-by-token'
import { getUserByEmail } from '@/actions/repository/get-user-by-email'
import { hashPassword } from '@/actions/adapters/password-hasher'
import { db } from '@/lib/db'

export const newPasswork = async (
  values: z.infer<typeof ResetPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'Missing token' }
  }

  const validateFields = ResetPasswordSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Invalid fields' }
  }

  const { password } = validateFields.data

  const existingToken = await getForgotPasswordTokenByToken(token)

  if (!existingToken) {
    return { error: 'Invalid token!' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()

  if (hasExpired) {
    return { error: 'Token has expired!' }
  }

  const existingUser = await getUserByEmail(existingToken.email)

  if (!existingUser) {
    return { error: 'Email does not exist!' }
  }

  const hashedPassword = await hashPassword(password)

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      password: hashedPassword,
    },
  })

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  })

  return { success: 'Password updated' }
}
