"use client"

import * as React from "react"
import {Label, Pie, PieChart} from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

type CategoryLikes = {
    name: string;
    likes: number;
    fill?: string;
}

// Define chart colors
const chartColors = [
    "#2980B9",  // Blue
    "#E67E22",  // Orange
    "#318BA9",  // Teal
    "#1a5980",  // Darker Blue
    "#b35c11",  // Darker Orange
    "#1f5469",  // Darker Teal
];

export function WallpaperCategoryChart({data}: { data: CategoryLikes[] }) {
    const chartData = React.useMemo(() => {
        return data.map((item, index) => ({
            ...item,
            fill: item.fill || chartColors[index % chartColors.length]
        }));
    }, [data]);

    const totalLikes = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.likes, 0)
    }, [chartData]);

    const chartConfig = React.useMemo(() => {
        const config: ChartConfig = {
            likes: {
                label: "Likes",
            }
        };

        chartData.forEach((item, index) => {
            config[item.name] = {
                label: item.name,
                color: chartColors[index % chartColors.length],
            };
        });

        return config;
    }, [chartData]);

    return (
        <Card className="grid col-span-2">
            <CardHeader className="items-center pb-0">
                <CardTitle>Category Popularity</CardTitle>
                <CardDescription>Likes by wallpaper category</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                {chartData.length > 0 ? (
                    <ChartContainer
                        config={chartConfig}
                        className="mx-auto aspect-square max-h-[250px]"
                    >
                        <PieChart>
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel/>}
                            />
                            <Pie
                                data={chartData}
                                dataKey="likes"
                                nameKey="name"
                                innerRadius={60}
                                strokeWidth={5}
                            >
                                <Label
                                    content={({viewBox}) => {
                                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                            return (
                                                <text
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                >
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={viewBox.cy}
                                                        className="fill-foreground text-3xl font-bold"
                                                    >
                                                        {totalLikes.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        Total Likes
                                                    </tspan>
                                                </text>
                                            )
                                        }
                                    }}
                                />
                            </Pie>
                        </PieChart>
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