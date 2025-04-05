"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {onboardingSchema, OnboardingFormType} from "@/schemas/onboarding/onboardingSchema";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {CountryDropdown} from "@/components/ui/country-dropdown";
import {Button} from "@/components/ui/button";
import completeProfile from "@/actions/compeleteProfile";
import {toast} from "sonner";
import {useRouter} from "next/navigation";
import {useUser} from "@clerk/nextjs";

export default function OnboardingForm() {
    const form = useForm<OnboardingFormType>({
        resolver: zodResolver(onboardingSchema),
        defaultValues: {
            mobileNumber: "",
            gender: "MALE",
            country: "",
        }
    })
    const router = useRouter();
    const {user} = useUser();

    const onSubmit = async (data: OnboardingFormType) => {
        const result = await completeProfile(data);
        if (result.error) {
            toast.error("Error", {
                description: "Something went wrong",
                dismissible: true,
            });
        } else {
            await user?.reload()
            router.replace(user?.publicMetadata.role === "ARTIST" ? "/artist" : "/admin");
            toast.success("Success", {
                description: "Profile completed successfully",
                dismissible: true,
            });

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={"p-6 md:p-8"}>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-2xl font-bold">Complete Your Profile</h1>
                        <p className="text-balance text-muted-foreground">Please provide additional information to
                            personalize your experience</p>
                    </div>


                    <div className={"grid gap-2"}>
                        <FormField
                            name="mobileNumber"
                            control={form.control}
                            disabled={form.formState.isSubmitting}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Mobile Number" {...field} name={"mobileNumber"}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={"grid gap-2"}>
                        <FormField
                            name="gender"
                            control={form.control}
                            disabled={form.formState.isSubmitting}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Gender</FormLabel>
                                    <FormControl>
                                        <RadioGroup onValueChange={field.onChange} defaultValue={field.value}
                                                    className={"flex justify-start items-center"}>
                                            <FormItem className={"flex items-center space-x-3 space-y-0"}>
                                                <FormControl>
                                                    <RadioGroupItem value={"MALE"}/>
                                                </FormControl>
                                                <FormLabel>Male</FormLabel>
                                            </FormItem>
                                            <FormItem className={"flex items-center space-x-3 space-y-0"}>
                                                <FormControl>
                                                    <RadioGroupItem value={"FEMALE"}/>
                                                </FormControl>
                                                <FormLabel>Female</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className={"grid gap-2"}>
                        <FormField
                            name="country"
                            control={form.control}
                            disabled={form.formState.isSubmitting}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <CountryDropdown
                                            placeholder="Country"
                                            defaultValue={field.value}
                                            onChange={(country) => {
                                                field.onChange(country.name);
                                            }}

                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#318BA9] to-[#E67E22] hover:from-[#2980B9] hover:to-[#D35400] text-white"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? "Completing Profile..." : "Complete Profile"}
                    </Button>
                </div>
            </form>
        </Form>
    )
}