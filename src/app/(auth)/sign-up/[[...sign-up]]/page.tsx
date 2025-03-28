"use client"

import {Card, CardContent} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import Image from "next/image";

import RegisterForm from "@/sections/register-page/Form";
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function RegisterionForm() {
    const {isSignedIn} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (isSignedIn) {
            router.push("/");
        }
    });

    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-3xl">
                <div className={cn("flex flex-col gap-6")}>
                    <Card className="overflow-hidden">
                        <CardContent className="grid p-0 md:grid-cols-2">
                            <RegisterForm/>
                            <div className="relative hidden bg-muted md:block rounded-bl-lg rounded-tl-lg">
                                <Image width={500} height={500} alt="Image"
                                       className="absolute inset-0 h-full w-full object-cover rounded-bl-lg rounded-tl-lg dark:brightness-[0.2] dark:grayscale"
                                       src="https://images.unsplash.com/photo-1491234323906-4f056ca415bc?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                            </div>
                        </CardContent>
                    </Card>
                    <div
                        className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
                        By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy
                        Policy</a>.
                    </div>
                </div>
            </div>
        </div>
    );
}