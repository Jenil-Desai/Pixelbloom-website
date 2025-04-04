import {Card, CardContent} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function CreateWallpaperFormSkeleton() {
    return (
        <div className={"grid md:grid-cols-2 grid-cols-1 gap-4"}>
            <Card className={"h-fit"}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Skeleton className={"h-9 w-full min-w-0 rounded-md"}/>
                    </div>
                    <div className={"grid md:grid-cols-2 grid-cols-1 gap-4"}>
                        <div className="space-y-2">
                            <Skeleton className={"h-9 w-full min-w-0 rounded-md"}/>
                        </div>
                        <div className="space-y-2">
                            <Skeleton className={"h-9 w-full min-w-0 rounded-md"}/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Skeleton className={"h-9 w-full min-w-0 rounded-md"}/>
                    </div>
                    <div className="space-y-2">
                        <Skeleton className={"h-9 w-24"}/>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}