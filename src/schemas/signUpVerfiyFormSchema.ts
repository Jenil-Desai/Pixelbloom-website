import * as z from "zod";

export const signUpVerifyFormSchema = z.object({
  code: z.string().nonempty("Please enter the verification code"),
});

export type SignUpVerifyFormType = z.infer<typeof signUpVerifyFormSchema>;
