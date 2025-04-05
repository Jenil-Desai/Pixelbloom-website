"use client";

import {currentPageBreadcrumbState} from "@/store";
import {useSetAtom} from "jotai";
import {useEffect} from "react";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import {useUser} from "@clerk/nextjs";
import {useQuery} from "@tanstack/react-query";
import {fetchAdminStatistics} from "@/queryFn/fetchAdminStatatics";
import {toast} from "sonner";
import {PieChart} from "@/components/globals/charts/PieChart";
import {TrendingUp, Users, Flag, UserCheck, Brush, User, GlobeIcon, BadgeCheck} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

export default function Page() {
    const {isError, isPending, data} = useQuery({
        queryKey: ["admin-statistics"],
        queryFn: fetchAdminStatistics,
    });
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);
    const {user} = useUser();

    useEffect(() => {
        setCurrentPageBreadcrumb([{title: "Dashboard", link: "/admin"}])
    }, [setCurrentPageBreadcrumb]);

    if (!user) return null;

    if (isError) {
        toast.error("Error", {
            description: "Something went wrong",
            dismissible: true,
        });
        return null;
    }

    if (isPending) {
        return (
            <PageContainer scrollable>
                <div className="h-[60vh] flex items-center justify-center">
                    <p className="text-muted-foreground">Loading statistics...</p>
                </div>
            </PageContainer>
        );
    }

    // Calculate summary metrics from the data
    const verifiedArtists = data.verifiedCount.find(item => item.name === "Verified")?.value || 0;
    const topCountry = [...data.countryWiseCount].sort((a, b) => b.value - a.value)[0];

    return (
        <PageContainer scrollable>
            <div className="space-y-6">
                <div className="flex items-start justify-between">
                    <Heading title={user.fullName as string} description="👋🏻 Welcome Back, Admins!"/>
                </div>
                <Separator/>

                {/* Summary Cards Section */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Total Artists Card */}
                    <Card className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 border-blue-500/50">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardDescription>Total Artists</CardDescription>
                                <Users className="h-5 w-5 text-blue-600"/>
                            </div>
                            <CardTitle className="text-2xl font-bold">{data.totalArtists.toLocaleString()}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                Active platform creators
                            </div>
                        </CardContent>
                    </Card>

                    {/* Roles Card */}
                    <Card className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 border-purple-500/50">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardDescription>Artist Roles</CardDescription>
                                <Brush className="h-5 w-5 text-purple-600"/>
                            </div>
                            <CardTitle className="text-2xl font-bold">{data.roleWiseCount.length}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                Distinct creative roles
                            </div>
                        </CardContent>
                    </Card>

                    {/* Verified Artists Card */}
                    <Card className="bg-gradient-to-br from-green-500/20 to-green-700/20 border-green-500/50">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardDescription>Verified Artists</CardDescription>
                                <BadgeCheck className="h-5 w-5 text-green-600"/>
                            </div>
                            <CardTitle className="text-2xl font-bold">{verifiedArtists.toLocaleString()}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                {((verifiedArtists / data.totalArtists) * 100).toFixed(1)}% of total artists
                            </div>
                        </CardContent>
                    </Card>

                    {/* Top Country Card */}
                    <Card className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 border-amber-500/50">
                        <CardHeader className="pb-2">
                            <div className="flex justify-between items-start">
                                <CardDescription>Top Country</CardDescription>
                                <GlobeIcon className="h-5 w-5 text-amber-600"/>
                            </div>
                            <CardTitle className="text-2xl font-bold">{topCountry?.name || "N/A"}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-xs text-muted-foreground">
                                {topCountry ? `${topCountry.value.toLocaleString()} artists (${((topCountry.value / data.totalArtists) * 100).toFixed(1)}%)` : "No data"}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Charts Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Role Distribution Chart */}
                    <PieChart
                        className="col-span-1 md:col-span-2"
                        data={data.roleWiseCount}
                        title="Artist Roles Distribution"
                        description="Breakdown of artists by their primary roles"
                        innerRadius={60}
                        colors={["#3498db", "#f39c12", "#e74c3c", "#2ecc71", "#9b59b6", "#1abc9c", "#d35400", "#34495e"]}
                        showTotal={true}
                        totalLabel="Artists"
                        footer={
                            <>
                                <div className="flex items-center gap-2 font-medium leading-none">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4"/>
                                </div>
                                <div className="leading-none text-muted-foreground">
                                    Showing total artists by role
                                </div>
                            </>
                        }
                    />

                    {/* Gender Distribution Chart */}
                    <PieChart
                        className="col-span-1 md:col-span-2 lg:col-span-2"
                        data={data.genderWiseCount}
                        title="Gender Distribution"
                        description="Breakdown of artists by gender"
                        innerRadius={60}
                        colors={["#9b59b6", "#3498db", "#2ecc71"]}
                        showTotal={true}
                        totalLabel="Artists"
                        footer={
                            <div className="flex items-center gap-2 text-sm">
                                <User className="h-4 w-4"/>
                                <span>Demographic breakdown</span>
                            </div>
                        }
                    />

                    {/* Country Distribution Chart */}
                    <PieChart
                        className="col-span-1 md:col-span-2 lg:col-span-2"
                        data={data.countryWiseCount}
                        title="Geographic Distribution"
                        description="Top countries by artist count"
                        innerRadius={60}
                        totalLabel={"Countries"}
                        colors={["#f1c40f", "#e67e22", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6", "#1abc9c"]}
                        showTotal={true}
                        footer={
                            <div className="flex items-center gap-2 text-sm">
                                <Flag className="h-4 w-4"/>
                                <span>Showing top countries by artist count</span>
                            </div>
                        }
                    />

                    {/* Verification Status Chart */}
                    <PieChart
                        className="col-span-1 md:col-span-2 lg:col-span-2"
                        data={data.verifiedCount}
                        title="Verification Status"
                        description="Artists by verification status"
                        innerRadius={60}
                        colors={["#27ae60", "#e74c3c"]}
                        showTotal={true}
                        totalLabel="Artists"
                        footer={
                            <div className="flex items-center gap-2 text-sm">
                                <UserCheck className="h-4 w-4"/>
                                <span>Verification status of registered artists</span>
                            </div>
                        }
                    />
                </div>
            </div>
        </PageContainer>
    );
}