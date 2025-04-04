import axios from "axios";

export type fetchAllWallpapersResponse = {
    id: string;
    title: string;
    imageUrl: string;
    platform: ["DESKTOP" | "MOBILE" | "TABLET"];
    categories: {
        name: string;
    };
    likes: number;
};

export async function fetchAllWallpapers() {
    const result = await axios.get<fetchAllWallpapersResponse[]>("/api/wallpapers/all-wallpapers");

    if (result.status !== 200) {
        throw new Error("Failed to fetch categories");
    }

    return result.data;
}