import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent
} from "@/components/ui/chart";
import {Bar, BarChart, XAxis} from "recharts";
import * as React from "react";

interface WallpaperLikes {
    data: {
        title: string;
        likes: number;
    }[]
}

export default function WallpaperLikesChart({data}: WallpaperLikes) {
    const chartConfig = {
        likes: {
            label: "Likes",
            color: "#2980B9",
        }
    } satisfies ChartConfig

    return (
        <Card className={"grid col-span-2"}>
            <CardHeader>
                <CardTitle>Wallpaper Performance</CardTitle>
                <CardDescription>
                    <span className="@[540px]/card:block hidden">Popularity metrics by wallpaper category</span>
                    <span className="@[540px]/card:hidden">Likes metrics</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                {data.length > 0 ? (
                    <ChartContainer config={chartConfig}
                                    className={"min-h-[200px] w-full"}>
                        <BarChart data={data}>
                            <XAxis dataKey="title"
                                   tickLine={false}
                                   tickMargin={10}
                                   axisLine={false}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <ChartTooltip content={<ChartTooltipContent indicator={"line"}/>}/>
                            <ChartLegend content={<ChartLegendContent/>}/>
                            <Bar dataKey="likes" fill={"#2980B9"} radius={6}/>
                        </BarChart>
                    </ChartContainer>
                ) : (
                    <div className="flex items-center justify-center h-[250px]">
                        <p className="text-muted-foreground">No data available</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}