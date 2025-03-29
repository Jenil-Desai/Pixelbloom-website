import WallpaperCard from "./WallpaperCard";
import {useQuery} from "@tanstack/react-query";
import {fetchWallpapers, fetchWallpapersResponse} from "@/queryFn/fetchWallpapers";
import {ImageOff} from "lucide-react";
import ArtistsWallpaperSkeleton from "@/app/artist/wallpapers/skeleton";

const WallpaperGrid = () => {
    const {isError, isPending, data} = useQuery<fetchWallpapersResponse[]>({
        queryKey: ["wallpapers"],
        queryFn: fetchWallpapers,
    });

    if (isError) {
        return (
            <div className="col-span-3 flex justify-center items-center h-screen">
                <div className={"flex flex-col items-center gap-4"}>
                    <ImageOff size={100} className={"text-gray-500"}/>
                    <p className="text-gray-500">Error fetching wallpapers.</p>
                </div>
            </div>
        );
    }

    if (isPending) {
        return <ArtistsWallpaperSkeleton/>
    }


    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.length > 0 ? (
                data.map((wallpaper) => (
                    <WallpaperCard
                        key={wallpaper.id}
                        title={wallpaper.title}
                        imageUrl={wallpaper.imageUrl}
                        platform={wallpaper.platform}
                        category={wallpaper.categories.name}
                        likes={wallpaper.likes}
                    />
                ))
            ) : (
                <div className="col-span-3 flex justify-center items-center h-screen">
                    <div className={"flex flex-col items-center gap-4"}>
                        <ImageOff size={100} className={"text-gray-500"}/>
                        <p className="text-gray-500">No wallpapers available.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WallpaperGrid;