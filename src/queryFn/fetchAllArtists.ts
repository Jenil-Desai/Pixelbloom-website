import axios from "axios";
import {Artist} from "@/app/admin/artists/columns";

export async function fetchAllArtist() {
    const res = await axios.get<Artist[]>("/api/artist/all-artists")

    if (res.status !== 200) {
        throw new Error("Failed to fetch artist data");
    }

    return res.data;
}