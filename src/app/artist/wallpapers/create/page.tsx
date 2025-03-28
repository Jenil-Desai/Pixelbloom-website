"use client";

import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { fetchCategories, fetchCategoriesResponse } from "@/queryFn/fetchCategories";
import { CreateWallpaperInput, createWallpaperSchema } from "@/schemas/wallpapers/createWallpaper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

export default function Page() {
  const { isError, isPending, data } = useQuery<fetchCategoriesResponse[]>({
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

  if (isError) return <p>Error Fetching Categories</p>;

  if (isPending) return <p>Fetching Categories</p>;

  return (
    <div>
      <Form {...form}>
        <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <FormField
                name="title"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="title">Title</Label>
                    <Input {...field} placeholder="Title" name="title" />
                  </>
                )}
              />
              <FormField
                name="platform"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="platform">Platform</Label>
                    <Select onValueChange={field.onChange} value={field.value} name="platform">
                      <SelectTrigger>
                        <SelectValue>Select An Platform</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MOBILE">Mobile</SelectItem>
                        <SelectItem value="DESKTOP">Desktop</SelectItem>
                        <SelectItem value="TABLET">Tablet</SelectItem>
                      </SelectContent>
                    </Select>
                  </>
                )}
              />

              <FormField
                name="categoriesId"
                control={form.control}
                render={({ field }) => (
                  <>
                    <Label htmlFor="cateogry">Cateogry</Label>
                    <Select onValueChange={field.onChange} value={field.value} name="cateogry">
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
                  </>
                )}
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
