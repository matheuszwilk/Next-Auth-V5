import * as z from 'zod'

export const ForgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: 'E-mail is required.',
    })
    .email({
      message: 'Please provide a valid e-mail.',
    })
    .trim(),
})
