import * as z from "zod";

export const signUpFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be text",
    })
    .min(2, {
      message: "Name must be at least 2 characters long",
    }),
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

export type SignUpFormType = z.infer<typeof signUpFormSchema>;
