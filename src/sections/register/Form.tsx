"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useSignUp} from "@clerk/nextjs";
import {useState} from "react";
import {toast} from "sonner";
import Link from "next/link";

import {signUpFormSchema, SignUpFormType} from "@/schemas/sign-up/signUpFormSchema";
import VerificationForm from "@/sections/register/verificationForm";
import {logger} from "@/utils/logger";

export default function RegisterForm() {
    const [isVerifying, setIsVerifying] = useState(false);
    const {isLoaded, signUp, setActive} = useSignUp();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignUpFormType>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const onSubmit = handleSubmit(handleArtistRegistration);

    async function handleArtistRegistration(data: SignUpFormType) {
        if (!isLoaded) return;
        try {
            await signUp.create({
                emailAddress: data.email,
                password: data.password,
                firstName: data.name.slice(0, data.name.indexOf(" ")),
                lastName: data.name.slice(data.name.indexOf(" ") + 1),
            });

            await signUp.prepareEmailAddressVerification({
                strategy: "email_code",
            });
            setIsVerifying(true);
        } catch (error) {
            logger.error("Error signing up artist", error);
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            toast.error("Error", {
                description: errorMessage,
                dismissible: true,
            });
        }
    }

    if (isVerifying) {
        if (!isLoaded) return null;
        return <VerificationForm isLoaded signUp={signUp} setActive={setActive}/>;
    }

    return (
        <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Create Your PixelBloom Account</h1>
                    <p className="text-balance text-muted-foreground">Join our community of wallpaper artists and
                        creators</p>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" placeholder="John Doe"
                           aria-invalid={!!errors.name} {...register("name")} disabled={isSubmitting}/>
                    {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="johndoe@example.com"
                           aria-invalid={!!errors.email} {...register("email")} disabled={isSubmitting}/>
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" aria-invalid={!!errors.password} {...register("password")}
                           disabled={isSubmitting}/>
                    {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}
                </div>
                <div id="clerk-captcha"></div>
                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
                <div
                    className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
                <div className="text-center text-sm">
                    Already Have an account?
                    <Link href="/sign-in" className="underline underline-offset-4">
                        Sign in
                    </Link>
                </div>
            </div>
        </form>
    );
}