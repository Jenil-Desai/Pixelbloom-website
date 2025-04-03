import {Skeleton} from "@/components/ui/skeleton";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";

export default function ArtistDashboardSkeleton() {
    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-[200px]"/>
                        <Skeleton className="h-4 w-[300px]"/>
                    </div>
                </div>
                <Separator/>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* WallpaperLikesChart skeleton */}
                    <div className="col-span-2 rounded-lg border">
                        <div className="p-6 space-y-2">
                            <Skeleton className="h-6 w-[140px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="p-6">
                            <Skeleton className="h-[200px] w-full"/>
                        </div>
                    </div>

                    <div className="grid col-span-2"/>

                    {/* WallpaperCategoryChart skeleton */}
                    <div className="col-span-2 rounded-lg border">
                        <div className="p-6 space-y-2">
                            <Skeleton className="h-6 w-[140px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="p-6">
                            <Skeleton className="h-[250px] w-full"/>
                        </div>
                    </div>

                    {/* WallpaperCountCategoryChart skeleton */}
                    <div className="col-span-2 rounded-lg border">
                        <div className="p-6 space-y-2">
                            <Skeleton className="h-6 w-[140px]"/>
                            <Skeleton className="h-4 w-[200px]"/>
                        </div>
                        <div className="p-6">
                            <Skeleton className="h-[250px] w-full"/>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}