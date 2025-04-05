"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useSignIn} from "@clerk/nextjs";
import {toast} from "sonner";
import Link from "next/link";

import {logger} from "@/utils/logger";
import {signInFormSchema, SignInFormType} from "@/schemas/sign-in/signInFormSchema";
import {useRouter} from "next/navigation";

export default function LoginForm() {
    const {isLoaded, signIn, setActive} = useSignIn();
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
    } = useForm<SignInFormType>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const router = useRouter();

    const onSubmit = handleSubmit(handleArtistRegistration);

    async function handleArtistRegistration(data: SignInFormType) {
        if (!isLoaded) return;
        try {
            const signInAttempt = await signIn.create({
                identifier: data.email,
                password: data.password,
            });

            if (signInAttempt.status === "complete") {
                await setActive({session: signInAttempt.createdSessionId});
                router.push("/");
            } else {
                toast.error("Error", {
                    description: "Something went wrong",
                    dismissible: true,
                });
            }
        } catch (error) {
            logger.error("Error signing up artist", error);
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            toast.error("Error", {
                description: errorMessage,
                dismissible: true,
            });
        }
    }

    return (
        <form className="p-6 md:p-8" onSubmit={onSubmit}>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Welcome Back to PixelBloom Studio</h1>
                    <p className="text-balance text-muted-foreground">Sign in to continue managing your wallpapers</p>
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
                <Button type="submit" disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white">
                    Login
                </Button>
                <div
                    className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
                <div className="text-center text-sm">
                    Don&apos;t have an account?
                    <Link href="/sign-up" className="underline underline-offset-4">
                        Sign up
                    </Link>
                </div>
            </div>
        </form>
    );
}