import {CalendarIcon, MapIcon, PhoneIcon, GlobeAsiaAustraliaIcon, UserIcon} from "@heroicons/react/24/outline";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {CheckIcon} from "lucide-react";
import {fetchArtistResponse, fetchArtist} from "@/queryFn/fetchArtist";
import {useQuery} from "@tanstack/react-query";
import {toast} from "sonner";
import moment from "moment";
import ArtistsAccountSkeleton from "@/app/artist/account/Skeleton";

export default function Account() {
    const {isError, isPending, data} = useQuery<fetchArtistResponse>({
        queryKey: ["artist"],
        queryFn: fetchArtist,
    })

    if (isError) {
        toast.error("Error", {
            description: "Something went wrong",
            dismissible: true,
        });
        return;
    }

    if (isPending) return <ArtistsAccountSkeleton/>

    return (
        <div className="space-y-8 max-w-3xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
            <Card className="shadow-lg rounded-lg">
                <CardHeader className="flex items-center space-x-4 p-6 bg-white rounded-t-lg">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src="https://via.placeholder.com/150" alt="Profile Picture"/>
                        <AvatarFallback>{data.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <CardTitle className="text-3xl font-bold">{data.name}</CardTitle>
                        <Badge

                            className={`mt-2 ${data.isVerified ? "bg-gradient-to-r from-[#2980B9] to-[#E67E22] text-white" : "bg-gray-200 text-gray-800"}`}>
                            {data.isVerified ? (
                                <>
                                    Verified <CheckIcon className="h-4 w-4 ml-1 inline"/>
                                </>
                            ) : (
                                "Unverified"
                            )}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6 bg-white rounded-b-lg">
                    <div className="flex items-center space-x-3">
                        <MapIcon className="h-6 w-6 text-gray-500"/>
                        <span className="font-medium">Email:</span>
                        <span>{data.email}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <PhoneIcon className="h-6 w-6 text-gray-500"/>
                        <span className="font-medium">Mobile Number:</span>
                        <span>{data.mobileNo}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <UserIcon className="h-6 w-6 text-gray-500"/>
                        <span className="font-medium">Gender:</span>
                        <span>{data.gender}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <GlobeAsiaAustraliaIcon className="h-6 w-6 text-gray-500"/>
                        <span className="font-medium">Country:</span>
                        <span>{data.country}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <CalendarIcon className="h-6 w-6 text-gray-500"/>
                        <span className="font-medium">Created At:</span>
                        <span>{moment(data.createdAt).format("Do MMM YYYY")}</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}