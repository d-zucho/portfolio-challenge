import { z, ZodType } from 'zod'
import { FormDataType } from './types'

export const ContactFormSchema: ZodType<FormDataType> = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
})
