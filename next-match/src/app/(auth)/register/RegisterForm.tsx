'use client'
import { registerUser } from "@/app/actions/authActions";
import { RegisterSchemas, registerSchemas } from "@/lib/schemas/registerSchemas";
import { Card, CardHeader, CardBody, Input, Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

const RegisterForm = () => {
    const { register, handleSubmit, setError, formState: { errors, isValid, isSubmitted } } = useForm<RegisterSchemas>({
        resolver: zodResolver(registerSchemas),
        mode: 'onTouched'
    });

    const onSubmit = async (data: RegisterSchemas) => {

        // console.log("data1", data);
        const result = await registerUser(data);
        // console.log(result);

        if (result.status === 'success') {
            console.log("User registered successfully");

        } else {
            if (Array.isArray(result.error)) {
                result.error.forEach((e) => {
                    const fieldName = e.path.join('.') as 'email' | 'name' | 'password';
                    setError(fieldName, { message: e.message });
                })
            } else {
                setError('root.serverError', { message: result.error });
            }
        }

    }


    return (

        <Card className="w-2/5 sm:w-3/5 lg:w-2/3  mx-auto">
            <CardHeader className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-2 items-center text-red-700">
                    <div className=" flex flex-row items-center gap-3">
                        <GiPadlock size={30} />
                        <h1 className="text-3xl font-semibold">Register</h1>
                    </div>
                    <p className="text-black font-semibold">Welcome to NextMatch</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <Input
                            label='Name'
                            variant="bordered"
                            {...register('name')}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message}
                        />

                        <Input
                            label='Email'
                            variant="bordered"
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                        />

                        <Input
                            label='Password'
                            variant="bordered"
                            type="password"
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message}
                        />
                        {errors.root?.serverError && (
                            <p className="text-danger text-sm">{errors.root?.serverError.message}</p>
                        )}
                        <Button isLoading={isSubmitted} isDisabled={!isValid} className="text-xl font-bold bg-slate-400" fullWidth type="submit">Register</Button>
                    </div>
                </form>
            </CardBody>

        </Card>

    )
}
export default RegisterForm