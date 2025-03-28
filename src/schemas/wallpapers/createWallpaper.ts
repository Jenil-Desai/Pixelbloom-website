import * as z from "zod";

export const createWallpaperSchema = z.object({
    title: z.string().min(1, {message: "Title is required"}).max(255),
    platform: z.enum(["MOBILE", "DESKTOP", "TABLET"], {message: "Platform is required"}),
    file: z.instanceof(FileList).refine((files) => files.length > 0, "File is required"),
    categoriesId: z.string().min(1, {message: "Category ID is required"}),
});

export type CreateWallpaperInput = z.infer<typeof createWallpaperSchema>;