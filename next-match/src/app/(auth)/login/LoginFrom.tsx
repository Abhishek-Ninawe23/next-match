'use client';
import { signInUser } from "@/app/actions/authActions";
import { loginSchema, LoginSchema } from "@/lib/schemas/loginSchema";
import { Button, Card, CardBody, CardHeader, Input } from "@heroui/react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi"
import { toast } from "react-toastify";

const LoginFrom = () => {

    const router = useRouter();

    const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onTouched'
    });

    const onSubmit = async (data: LoginSchema) => {
        // console.log(data);
        const result = await signInUser(data);

        if (result.status === 'success') {
            router.push('/');
            router.refresh();
        } else {
            toast.error(result.error as string);
        }

    }


    return (

        <Card className="w-2/5 sm:w-3/5 lg:w-2/3  mx-auto">
            <CardHeader className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-2 items-center text-red-700">
                    <div className=" flex flex-row items-center gap-3">
                        <GiPadlock size={30} />
                        <h1 className="text-3xl font-semibold">Login</h1>
                    </div>
                    <p className="text-black font-semibold">Welcome back to NextMatch</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <Input
                            label='Email'
                            variant="bordered"
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />

                        <Input
                            label='Password'
                            variant="bordered"
                            type="password"
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        <Button isLoading={isSubmitting} isDisabled={!isValid} className="text-xl font-bold bg-slate-400" fullWidth type="submit">Login</Button>
                    </div>
                </form>
            </CardBody>

        </Card>

    )
}
export default LoginFrom