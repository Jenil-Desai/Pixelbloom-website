import {NextRequest, NextResponse} from "next/server";
import {currentUser} from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function DELETE(request: NextRequest, {params}: { params: Promise<{ id: string }> }) {
    const currentuser = await currentUser();

    if (!currentuser) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    const {id} = await params;

    if (!id) {
        return NextResponse.json({error: "No id provided"}, {status: 400});
    }

    const wallpaper = await prisma.wallpapers.delete({
        where: {
            id: id,
        },
    });

    if (!wallpaper) {
        return NextResponse.json({error: "Wallpaper not found"}, {status: 404});
    }

    return NextResponse.json({message: "Wallpaper deleted"}, {status: 200});
}