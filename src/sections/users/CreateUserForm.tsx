import {useForm} from "react-hook-form";
import {CreateUserInput, createUserSchema} from "@/schemas/user/createUserSchema";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Card, CardContent} from "@/components/ui/card";
import {zodResolver} from "@hookform/resolvers/zod";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import createUser from "@/actions/createUser";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

export default function CreateUserForm() {
    const router = useRouter();
    const form = useForm<CreateUserInput>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        }
    })

    async function onSubmit(data: CreateUserInput) {
        const res = await createUser(data);
        if (res.success) {
            toast.success("Success", {
                description: "User Created Successfully",
                dismissible: true,
            })
            router.push("/admin/users");
        } else {
            toast.error("Error", {
                description: "Something went wrong",
                dismissible: true,
            });
        }
    }

    return (
        <Card className={"w-full"}>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <CardContent className={"space-y-4"}>
                        <div className={"space-y-2"}>
                            <FormField
                                name={"name"}
                                control={form.control}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter Your Name" name="name"/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={"space-y-2"}>
                            <FormField
                                name={"email"}
                                control={form.control}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter Your Email" name="email"
                                                   type={"email"}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className={"space-y-2"}>
                            <FormField
                                name={"password"}
                                control={form.control}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter Your Password" name="password"
                                                   type={"password"}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                        </div>

                        <Button type={"submit"} variant={"outline"}
                                disabled={form.formState.isSubmitting}>{form.formState.isSubmitting ? "Creating User..." : "Create User"}</Button>

                    </CardContent>
                </form>
            </Form>
        </Card>
    )
}