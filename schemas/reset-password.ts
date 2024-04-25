import * as z from 'zod'

export const ResetPasswordSchema = z.object({
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .trim()
    .min(1, {
      message: 'Please provide a valid password.',
    }),
})
