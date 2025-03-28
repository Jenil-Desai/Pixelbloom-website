import * as z from "zod";

export const createWallpaperSchema = z.object({
  title: z.string().min(1).max(255),
  platform: z.enum(["MOBILE", "DESKTOP", "TABLET"]),
  file: z.instanceof(File),
  categoriesId: z.string().uuid(),
});

export type CreateWallpaperInput = z.infer<typeof createWallpaperSchema>;
