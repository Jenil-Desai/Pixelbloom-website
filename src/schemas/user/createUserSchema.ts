import * as z from 'zod';

export const createUserSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be text",
    }).min(1, {
        message: "Please enter your name",
    }),
    email: z.string({
        required_error: "Email address is required",
        invalid_type_error: "Email must be text",
    }).email({
        message: "Please enter a valid email address (e.g., user@example.com)",
    }),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be text",
    }).min(6, {
        message: "Password must be at least 6 characters for security",
    }),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;