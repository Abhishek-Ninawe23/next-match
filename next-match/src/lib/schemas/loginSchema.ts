import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string()
        .min(6, { message: "Password must be atLease 6 characters" })
        .max(18, { message: "Password must be less than 18 characters" })
})

export type LoginSchema = z.infer<typeof loginSchema>
