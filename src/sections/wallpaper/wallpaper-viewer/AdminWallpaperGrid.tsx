import WallpaperCard from "./WallpaperCard";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {ImageOff} from "lucide-react";
import WallpaperSkeleton from "@/app/admin/my-wallpapers/skeleton";
import {fetchAllWallpapers, fetchAllWallpapersResponse} from "@/queryFn/fetchAllWallpapers";
import {deleteWallpaper} from "@/queryFn/deleteWallpaper";

const WallpaperGrid = () => {
    const queryClient = useQueryClient();
    const {isError, isPending, data} = useQuery<fetchAllWallpapersResponse[]>({
        queryKey: ["wallpapers"],
        queryFn: fetchAllWallpapers,
    });

    const mutation = useMutation({
        mutationFn: deleteWallpaper,
        onMutate: async (wallpaperId) => {
            // Cancel outgoing refetches
            await queryClient.cancelQueries({queryKey: ["wallpapers"]});

            // Snapshot the previous value
            const previousWallpapers = queryClient.getQueryData<fetchAllWallpapersResponse[]>(["wallpapers"]);

            // Optimistically update
            queryClient.setQueryData<fetchAllWallpapersResponse[]>(["wallpapers"], (old) =>
                old?.filter((wallpaper) => wallpaper.id !== wallpaperId)
            );

            return {previousWallpapers};
        },
        onError: (err, variables, context) => {
            // Rollback on error
            if (context?.previousWallpapers) {
                queryClient.setQueryData(["wallpapers"], context.previousWallpapers);
            }
        },
        onSettled: () => {
            // Refetch after error or success
            queryClient.invalidateQueries({queryKey: ["wallpapers"]});
        },
    });

    // Pass handleDelete to WallpaperCard
    const handleDelete = (id: string) => {
        mutation.mutate(id);
    };

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
        return <WallpaperSkeleton/>
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.length > 0 ? (
                data.map((wallpaper) => (
                    <WallpaperCard
                        key={wallpaper.id}
                        id={wallpaper.id}
                        title={wallpaper.title}
                        imageUrl={wallpaper.imageUrl}
                        platform={wallpaper.platform}
                        category={wallpaper.categories.name}
                        likes={wallpaper.likes}
                        onDelete={handleDelete}
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