import { z } from 'zod';

export const registerSchemas = z.object({
    name: z.string().min(3, { message: "Name must be atLease 3 characters" }),
    email: z.string().email(),
    password: z.string()
        .min(6, { message: "Password must be atLease 6 characters" })
        .max(18, { message: "Password must be less than 18 characters" })
})

export type RegisterSchemas = z.infer<typeof registerSchemas>
