import * as z from "zod";

export const onboardingFormSchema = z.object({
    mobileNumber: z
        .string({
            required_error: "Mobile number is required",
            invalid_type_error: "Mobile number must be text",
        })
        .min(10, {
            message: "Mobile number must be at least 10 digits long",
        }),
    gender: z.enum(["MALE", "FEMALE"], {
        required_error: "Gender is required",
        invalid_type_error: "Please select a valid gender",
    }),
    country: z
        .string({
            required_error: "Country is required",
            invalid_type_error: "Country must be text",
        })
        .min(2, {
            message: "Country name must be at least 2 characters long",
        }),
});

export type OnboardingFormType = z.infer<typeof onboardingFormSchema>;