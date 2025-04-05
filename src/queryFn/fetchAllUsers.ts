import axios from "axios";
import {User} from "@/app/admin/users/columns";

export async function fetchAllUsers() {
    const res = await axios.get<User[]>("/api/users/all-users")

    if (res.status !== 200) {
        throw new Error("Failed to fetch artist data");
    }

    return res.data;
}