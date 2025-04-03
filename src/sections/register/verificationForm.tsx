import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSlot} from "@/components/ui/input-otp";
import {signUpVerifyFormSchema, SignUpVerifyFormType} from "@/schemas/sign-up/signUpVerfiyFormSchema";
import {SetActive, SignUpResource} from "@clerk/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {logger} from "@/utils/logger";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";
import {toast} from "sonner";

type VerificationFormProps = {
    isLoaded: boolean;
    signUp: SignUpResource;
    setActive: SetActive;
};

export default function VerificationForm({isLoaded, signUp, setActive}: VerificationFormProps) {
    const router = useRouter();

    const form = useForm<SignUpVerifyFormType>({
        resolver: zodResolver(signUpVerifyFormSchema),
        defaultValues: {
            code: "",
        },
    });

    async function verifyArtistEmail(data: SignUpVerifyFormType) {
        if (!isLoaded) return;

        console.log(data);
        try {
            const signUpAttempt = await signUp.attemptEmailAddressVerification({
                code: data.code,
            });

            if (signUpAttempt.status === "complete") {
                await setActive({session: signUpAttempt.createdSessionId});
                router.push("/");
                return;
            } else {
                toast.error("Error", {
                    description: "Invalid verification code",
                    dismissible: true,
                });
            }
        } catch (error) {
            logger.error("Error verifying artist email", error);
            const errorMessage = error instanceof Error ? error.message : "Something went wrong";
            toast.error("Error", {
                description: errorMessage,
                dismissible: true,
            });
        }
    }

    return (
        <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(verifyArtistEmail)}>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <FormField
                            disabled={form.formState.isLoading}
                            control={form.control}
                            name="code"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>One-Time Password</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0}/>
                                                <InputOTPSlot index={1}/>
                                                <InputOTPSlot index={2}/>
                                                <InputOTPSlot index={3}/>
                                                <InputOTPSlot index={4}/>
                                                <InputOTPSlot index={5}/>
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>Please enter the one-time password sent to your
                                        email.</FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
            </form>
        </Form>
    );
}