import axios from "axios";

export type fetchArtistResponse = {
    name: string;
    email: string;
    mobileNo: string;
    gender: ["MALE", "FEMALE"];
    country: string;
    isVerified: boolean;
    createdAt: string;
}

export async function fetchArtist() {
    const res = await axios.get<fetchArtistResponse>("/api/artist")

    if (res.status !== 200) {
        throw new Error("Failed to fetch artist data");
    }

    return res.data;
}