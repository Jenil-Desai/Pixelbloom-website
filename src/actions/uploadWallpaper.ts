"use server";

import prisma from "@/lib/prisma";
import {currentUser} from "@clerk/nextjs/server";
import {uploadToBucket} from "@/utils/uploadToBucket";
import {logger} from "@/utils/logger";
import {$Enums} from "@/types/types";

export default async function uploadWallpaper(formData: FormData) {
    const user = await currentUser()

    if (!user) {
        return {error: "User not found"};
    }

    const title = formData.get("title");
    const platform = formData.get("platform");
    const categoriesId = formData.get("categoriesId");
    const file = formData.get("file") as File;

    if (!title || !platform || !categoriesId || !file) {
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
                title: title.toString(),
                platform: platform.toString() as $Enums.Platform,
                categoriesId: categoriesId.toString(),
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