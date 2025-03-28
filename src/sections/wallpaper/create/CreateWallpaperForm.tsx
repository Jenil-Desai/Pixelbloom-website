"use client";

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {fetchCategories, fetchCategoriesResponse} from "@/queryFn/fetchCategories";
import {CreateWallpaperInput, createWallpaperSchema} from "@/schemas/wallpapers/createWallpaper";
import {zodResolver} from "@hookform/resolvers/zod";
import {useQuery} from "@tanstack/react-query";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {useState} from "react";
import CreateWallpaperFormSkeleton from "@/app/artist/wallpapers/create/skeleton";
import {toast} from "sonner";

export default function CreateWallpaperForm() {
    const [preview, setPreview] = useState<string | null>(null);

    const {isError, isPending, data} = useQuery<fetchCategoriesResponse[]>({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });

    const form = useForm<CreateWallpaperInput>({
        resolver: zodResolver(createWallpaperSchema),
        defaultValues: {
            title: "",
            platform: "MOBILE",
            categoriesId: "",
        },
    });

    const onSubmit = async (data: CreateWallpaperInput) => {
        console.log(data);
    };

    if (isError) {
        toast.error("Error", {
            description: "Something went wrong",
            dismissible: true,
        });
        return;
    }

    if (isPending) return <CreateWallpaperFormSkeleton/>;

    return (
        <div className={"grid md:grid-cols-2 grid-cols-1 gap-4"}>
            <Card className={"h-fit"}>
                <Form {...form}>
                    <form className="" onSubmit={form.handleSubmit(onSubmit)}>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <FormField
                                    name="title"
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Title</FormLabel>
                                            <FormControl>
                                                <Input {...field} placeholder="Title" name="title"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className={"space-y-2"}>
                                    <FormField
                                        name="platform"
                                        control={form.control}
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Platform</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            name="platform">
                                                        <SelectTrigger>
                                                            <SelectValue>Select An Platform</SelectValue>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="MOBILE">Mobile</SelectItem>
                                                            <SelectItem value="DESKTOP">Desktop</SelectItem>
                                                            <SelectItem value="TABLET">Tablet</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className={"space-y-2"}>
                                    <FormField
                                        name="categoriesId"
                                        control={form.control}
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Category</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} value={field.value}
                                                            name="cateogry">
                                                        <SelectTrigger>
                                                            <SelectValue>Select An Category</SelectValue>
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {data.map((category) => (
                                                                <SelectItem key={category.id} value={category.id}>
                                                                    {category.name}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            <div className={"space-y-2"}>
                                <FormField
                                    name="file"
                                    control={form.control}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Upload File</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="file"
                                                    onChange={(event) => {
                                                        const file = event.target.files?.[0];
                                                        if (file) {
                                                            setPreview(URL.createObjectURL(file));
                                                        }
                                                        field.onChange(event.target.files);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <Button type={"submit"} variant={"outline"} disabled={false}>Submit</Button>

                        </CardContent>
                    </form>
                </Form>
            </Card>
            {preview && (
                <Card className={"w-full p-4"}>
                    <img src={preview} alt="Preview" className="w-full h-full rounded-lg"/>
                </Card>
            )}
        </div>
    );
}