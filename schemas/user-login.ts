import * as z from 'zod'

export const LoginSchema = z.object({
  email: z
    .string({
      required_error: 'E-mail is required.',
    })
    .email({
      message: 'Please provide a valid e-mail.',
    })
    .trim(),
  password: z
    .string({
      required_error: 'Password is required.',
    })
    .trim()
    .min(1, {
      message: 'Please provide a valid password.',
    }),
})
