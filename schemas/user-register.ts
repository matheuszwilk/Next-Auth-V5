import * as z from 'zod'

export const RegisterSchema = z.object({
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
    .min(6, {
      message: 'Minimum 6 characters required.',
    }),
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(1, {
      message: 'Please provide a valid name.',
    }),
})
