import {NextResponse} from "next/server";
import prisma from "@/lib/prisma"

export async function GET() {
    try {
        const categories = await prisma.categories.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        return NextResponse.json(categories);
    } catch (error) {
        console.error("Error fetching categories:", error);
        const errorMessage = error instanceof Error ? error.message : "Something went wrong";
        return NextResponse.json({message: "Failed to fetch categories", error: errorMessage}, {status: 500});
    }
}