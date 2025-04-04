// src/queryFn/deleteWallpaper.ts
import axios from "axios";

export const deleteWallpaper = async (id: string) => {
    const response = await axios.delete(`/api/wallpapers/${id}`);
    if (response.status != 200) {
        throw new Error('Failed to delete wallpaper');
    }
    return id;
};