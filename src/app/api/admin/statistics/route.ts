import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import {logger} from "@/utils/logger";
import prisma from "@/lib/prisma";

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    try {
        const artists = await prisma.artists.findMany({
            select: {
                country: true,
                gender: true,
                role: true,
                isVerified: true
            }
        });

        // 1. Country wise artists count
        const countryWiseCountObj = artists.reduce((acc, artist) => {
            const country = artist.country || "Unknown";
            acc[country] = (acc[country] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const countryWiseCount = Object.entries(countryWiseCountObj).map(
            ([name, value]) => ({name, value})
        );

        // 2. Gender wise artists count
        const genderWiseCountObj = artists.reduce((acc, artist) => {
            const gender = artist.gender || "Unknown";
            acc[gender] = (acc[gender] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const genderWiseCount = Object.entries(genderWiseCountObj).map(
            ([name, value]) => ({name, value})
        );

        // 3. Role wise artists count
        const roleWiseCountObj = artists.reduce((acc, artist) => {
            const role = artist.role || "Unknown";
            acc[role] = (acc[role] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const roleWiseCount = Object.entries(roleWiseCountObj).map(
            ([name, value]) => ({name, value})
        );

        // 4. isVerified artists count
        const verifiedCount = [
            {name: "Verified", value: artists.filter(artist => artist.isVerified).length},
            {name: "Not Verified", value: artists.filter(artist => !artist.isVerified).length}
        ];

        return NextResponse.json({
            countryWiseCount,
            genderWiseCount,
            roleWiseCount,
            verifiedCount,
            totalArtists: artists.length
        });
    } catch (error) {
        logger.error("Error fetching artist statistics:", error);
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json({message: "Failed to fetch artist statistics", error: errorMessage}, {status: 500});
    }
}