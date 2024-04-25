'use server'

import * as z from 'zod'

import { ForgotPasswordSchema } from '@/schemas'
import { getUserByEmail } from '@/actions/repository/get-user-by-email'
import { generatePasswordResetToken } from '@/lib/tokens'
import { sendPasswordResetEmail } from '@/lib/mail'

export const reset = async (values: z.infer<typeof ForgotPasswordSchema>) => {
  const validateFields = ForgotPasswordSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Please provide a valid email' }
  }

  const { email } = validateFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser) {
    return {
      error: 'Email does not exist',
    }
  }

  const passwordResetToken = await generatePasswordResetToken(email)
  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token
  )

  return {
    success: `Reset email sent to ${email}`,
  }
}
