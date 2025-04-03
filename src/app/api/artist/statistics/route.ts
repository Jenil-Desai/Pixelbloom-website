import {NextResponse} from 'next/server';
import prisma from "@/lib/prisma"
import {currentUser} from "@clerk/nextjs/server";

export async function GET() {
    const currentuser = await currentUser();

    if (!currentuser) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }

    try {
        const categoryLikes = await prisma.categories.findMany({
            where: {
                wallpapers: {
                    some: {
                        artistsId: currentuser.publicMetadata.artistsId,
                    }
                }
            },
            select: {
                name: true,
                wallpapers: {
                    select: {
                        likes: true
                    }
                }
            }
        });

        const formattedCategoryLikes = categoryLikes.map(category => ({
            name: category.name,
            likes: category.wallpapers.reduce((sum, wallpaper) => sum + wallpaper.likes, 0)
        }));

        const categoryCounts = await prisma.categories.findMany({
            where: {
                wallpapers: {
                    some: {
                        artistsId: currentuser.publicMetadata.artistsId,
                    }
                }
            },
            select: {
                name: true,
                _count: {
                    select: {
                        wallpapers: true
                    }
                }
            }
        });

        const formattedCategoryCounts = categoryCounts.map(category => ({
            count: category._count.wallpapers,
            name: category.name
        }));

        const WallpaperLikes = await prisma.wallpapers.findMany({
            where: {
                artistsId: currentuser.publicMetadata.artistsId,
            },
            select: {
                likes: true,
                title: true,
            }
        })

        return NextResponse.json({
            categoryLikes: formattedCategoryLikes,
            categoryCounts: formattedCategoryCounts,
            wallpaperLikes: WallpaperLikes
        });
    } catch (error) {
        console.error('Error fetching category likes:', error);
        return NextResponse.json({error: 'Failed to fetch data'}, {status: 500});
    }
}