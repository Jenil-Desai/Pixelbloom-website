import * as z from "zod";

export const signInFormSchema = z.object({
  email: z
    .string({
      required_error: "Email address is required",
      invalid_type_error: "Please enter a valid email address",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be text",
    })
    .min(8, {
      message: "Password must be at least 8 characters long",
    }),
});

export type SignInFormType = z.infer<typeof signInFormSchema>;
