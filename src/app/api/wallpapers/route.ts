import {currentUser} from "@clerk/nextjs/server";
import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

export default async function GET() {
    const currentuser = await currentUser();

    const prisma = new PrismaClient();
    const wallpapers = await prisma.wallpapers.findMany({
        where: {
            artistsId: currentuser?.publicMetadata.artistsId as string,
        },
    });

    return NextResponse.json({wallpapers});
}