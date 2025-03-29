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
        const artist = await prisma.artists.findUnique({
            where: {
                id: currentuser.publicMetadata.artistsId,
            },
            select: {
                name: true,
                email: true,
                mobileNo: true,
                gender: true,
                country: true,
                isVerified: true,
                createdAt: true
            }
        })

        return NextResponse.json(artist);
    } catch (error) {
        logger.error("Error fetching artist:", error);
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json({message: "Failed to fetch artist", error: errorMessage}, {status: 500});
    }
}