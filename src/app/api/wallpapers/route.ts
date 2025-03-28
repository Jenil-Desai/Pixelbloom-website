import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import prisma from "@/lib/prisma"

export default async function GET() {
    const currentuser = await currentUser();

    const wallpapers = await prisma.wallpapers.findMany({
        where: {
            artistsId: currentuser?.publicMetadata.artistsId as string,
        },
    });

    return NextResponse.json({wallpapers});
}