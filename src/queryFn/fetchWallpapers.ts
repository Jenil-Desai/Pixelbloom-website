import axios from "axios";

export type fetchWallpapersResponse = {
    id: string;
    title: string;
    imageUrl: string;
    platform: ["DESKTOP" | "MOBILE" | "TABLET"];
    categories: {
        name: string;
    };
    likes: number;
};

export async function fetchWallpapers() {
    const result = await axios.get<fetchWallpapersResponse[]>("/api/wallpapers");

    if (result.status !== 200) {
        throw new Error("Failed to fetch categories");
    }

    return result.data;
}