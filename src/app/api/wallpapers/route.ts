import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma"

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const wallpapers = await prisma.wallpapers.findMany({
        where: {
            artistsId: currentuser.publicMetadata.artistsId,
        },
        select: {
            id: true,
            imageUrl: true,
            title: true,
            platform: true,
            categories: {
                select: {
                    name: true,
                },
            },
            likes: true,
        }
    });

    return NextResponse.json(wallpapers);
}