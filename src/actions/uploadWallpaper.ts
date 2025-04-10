"use server";

import prisma from "@/lib/prisma";
import {currentUser} from "@clerk/nextjs/server";
import {uploadToBucket} from "@/utils/uploadToBucket";
import {logger} from "@/utils/logger";
import {CreateWallpaperInput} from "@/schemas/wallpapers/createWallpaper";

export default async function uploadWallpaper({data, file}: { data: CreateWallpaperInput, file: File }) {
    const user = await currentUser()

    if (!user) {
        return {error: "User not found"};
    }

    if (!data.title || !data.platform || !data.categoriesId || !file) {
        return {error: "Missing Required Fields"};
    }

    const fileBuffer = Buffer.from(await file.arrayBuffer());

    let imageUrl;
    try {
        imageUrl = await uploadToBucket({imageName: file.name, imageType: file.type, image: fileBuffer});
    } catch (error) {
        logger.error("[SERVER]: Error While Uploading Image : ", error);
        return {error: "Failed to upload image"};
    }

    try {
        await prisma.wallpapers.create({
            data: {
                title: data.title,
                platform: data.platform,
                categoriesId: data.categoriesId,
                artistsId: user.publicMetadata.artistsId,
                imageUrl: imageUrl,
            }
        })
    } catch (error) {
        logger.error("Error creating wallpaper:", error)
        return {error: "Failed to create wallpaper"};
    }

    return {success: true};
}