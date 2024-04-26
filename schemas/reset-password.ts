import * as z from 'zod'

export const ResetPasswordSchema = z.object({
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .trim()
    .min(6, {
      message: 'Minimum 6 characters required.',
    }),
})
