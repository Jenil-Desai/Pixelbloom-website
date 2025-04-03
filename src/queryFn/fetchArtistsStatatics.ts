import axios from "axios";

export type fetchArtistStatisticsResponse = {
    categoryLikes: {
        name: string;
        likes: number;
    }[];
    categoryCounts: {
        count: number;
        name: string;
    }[];
    wallpaperLikes: {
        title: string
        likes: number;
    }[];
};

export async function fetchArtistStatistics() {
    const result = await axios.get<fetchArtistStatisticsResponse>("/api/artist/statistics");

    if (result.status !== 200) {
        throw new Error("Failed to fetch statistics");
    }

    console.log(result.data);

    return result.data;
}