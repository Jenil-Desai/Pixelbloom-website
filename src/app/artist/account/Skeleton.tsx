import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";

export default function ArtistsAccountSkeleton() {
    return (
        <div className="space-y-8 max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <Card className="shadow-lg rounded-lg">
                <CardHeader className="flex items-center space-x-4 p-6 bg-white rounded-t-lg">
                    <Skeleton className="w-20 h-20 rounded-full"/>
                    <div className="flex-1 space-y-4 py-1">
                        <Skeleton className="h-4 w-3/4"/>
                        <Skeleton className="h-4 w-1/4"/>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6 bg-white rounded-b-lg">
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-4 w-1/2"/>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-4 w-1/2"/>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-4 w-1/2"/>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-4 w-1/2"/>
                    </div>
                    <div className="flex items-center space-x-3">
                        <Skeleton className="h-6 w-6 rounded-full"/>
                        <Skeleton className="h-4 w-1/2"/>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}