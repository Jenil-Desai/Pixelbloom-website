import axios from "axios";

export type fetchAdminStatisticsResponse = {
    countryWiseCount: { name: string, value: number }[];
    genderWiseCount: { name: string, value: number }[];
    roleWiseCount: { name: string, value: number }[];
    verifiedCount: { name: string, value: number }[];
    totalArtists: number;
};

export async function fetchAdminStatistics() {
    const result = await axios.get<fetchAdminStatisticsResponse>("/api/admin/statistics");

    if (result.status !== 200) {
        throw new Error("Failed to fetch statistics");
    }

    console.log(result.data);

    return result.data;
}