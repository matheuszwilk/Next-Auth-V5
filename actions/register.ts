'use server'

import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import { db } from '@/lib/db'
import { getUserByEmail } from '@/actions/repository/get-user-by-email'
import { hashPassword } from '@/actions/adapters/password-hasher'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values)

  if (!validateFields.success) {
    return { error: 'Ivalid email or password' }
  }

  const { email, password, name } = validateFields.data

  const hashedPassword = await hashPassword(password)

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: 'Email already in use',
    }
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  })

  // TODO: Send verification token email

  return { success: 'You are registered' }
}
