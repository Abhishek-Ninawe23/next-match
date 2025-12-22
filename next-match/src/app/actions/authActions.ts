'use server';

import { auth, signIn, signOut } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginSchema } from "@/lib/schemas/loginSchema";
import { registerSchemas, RegisterSchemas } from "@/lib/schemas/registerSchemas";
import { ActionResult } from "@/types";
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";


export async function signInUser(data: LoginSchema): Promise<ActionResult<string>> {
    try {

        const result = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: false
        })

        // console.log(result); //will not gets executed as this will run on server side

        return { status: 'success', data: "Logged In" }

    } catch (error) {
        console.log(error)

        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { status: 'error', error: 'Invalid Credentials' }

                default:
                    return { status: 'error', error: 'Something went wrong' };
            }
        } else {
            return { status: 'error', error: 'Something else went wrong' }
        }
    }
};


export async function signOutUser() {
    await signOut({ redirectTo: '/' });
}


export async function registerUser(data: RegisterSchemas): Promise<ActionResult<User>> {

    try {
        console.log("data2", data); //this will not gets execute as this will run on server side
        const validated = registerSchemas.safeParse(data);

        if (!validated.success) {
            return { status: 'error', error: validated.error.errors }
        }

        const { name, email, password } = validated.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await prisma.user.findUnique({ where: { email } })

        if (existingUser) return { status: 'error', error: 'User already exists' };

        const user = await prisma.user.create({
            data: {
                name,
                email,
                passwordhash: hashedPassword,
            },
        })

        return { status: 'success', data: user }
    } catch (error) {
        console.error(error);
        return { status: 'error', error: 'Something went wrong' }
    }

}

export async function getUserByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
}

export async function getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
}

export async function getAuthUserId() {

    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) throw new Error("Unauthorised");

    return userId;
}