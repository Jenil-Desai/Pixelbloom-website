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
        const users = await prisma.users.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                created_at: true,
            }
        });
        return NextResponse.json(users);
    } catch (error) {
        logger.error("Error fetching users:", error);
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json({message: "Failed to fetch users", error: errorMessage}, {status: 500});
    }
}