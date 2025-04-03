"use client";

import {currentPageBreadcrumbState} from "@/store";
import {useSetAtom} from "jotai";
import {useEffect} from "react";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import {useUser} from "@clerk/nextjs";
import WallpaperLikesChart from "@/sections/artists-dashboard/WallpaperLikesChart";
import {useQuery} from "@tanstack/react-query";
import {fetchArtistStatistics, fetchArtistStatisticsResponse} from "@/queryFn/fetchArtistsStatatics";
import {toast} from "sonner";
import {WallpaperCategoryChart} from "@/sections/artists-dashboard/WallpaperLikeCategoryChart";
import {WallpaperCategoryCountChart} from "@/sections/artists-dashboard/WallpaperCountCategoryChart";
import ArtistDashboardSkeleton from "@/app/artist/ArtistsDashboardSkeleton";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);
    const {isError, isPending, data} = useQuery<fetchArtistStatisticsResponse>({
        queryKey: ["statistics"],
        queryFn: fetchArtistStatistics,
    });
    const {user} = useUser();

    useEffect(() => {
        setCurrentPageBreadcrumb([{title: "Dashboard", link: "/artist"}])
    }, [setCurrentPageBreadcrumb]);

    if (!user) return null;

    if (isError) {
        toast.error("Error", {
            description: "Something went wrong",
            dismissible: true,
        });
        return;
    }

    if (isPending) return <ArtistDashboardSkeleton/>;

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={user.fullName as string} description="👋🏻 Welcome Back, Artists!"/>
                </div>
                <Separator/>
                <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
                    <WallpaperLikesChart data={data.wallpaperLikes}/>
                    <div className={"grid col-span-2"}></div>
                    <WallpaperCategoryChart data={data.categoryLikes}/>
                    <WallpaperCategoryCountChart data={data.categoryCounts}/>
                </div>
            </div>
        </PageContainer>
    );
}