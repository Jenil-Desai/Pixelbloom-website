"use client";

import React, {useMemo} from "react";
import {Label, Pie, PieChart as RechartsPieChart} from "recharts";
import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/components/ui/chart";

export type PieChartData = {
    name: string;
    value: number;
    color?: string;
};

interface PieChartProps extends React.HTMLAttributes<HTMLDivElement> {
    data: PieChartData[];
    title?: string;
    description?: string;
    innerRadius?: number;
    outerRadius?: number;
    showLegend?: boolean;
    showTooltip?: boolean;
    colors?: string[];
    dataKey?: string;
    nameKey?: string;
    showTotal?: boolean;
    totalLabel?: string;
    footer?: React.ReactNode;
}

const DEFAULT_COLORS = [
    "#2980B9",  // Blue
    "#E67E22",  // Orange
    "#318BA9",  // Teal
    "#1a5980",  // Darker Blue
    "#b35c11",  // Darker Orange
    "#1f5469",  // Darker Teal
];

export function PieChart({
                             data,
                             title,
                             description,
                             innerRadius = 0,
                             outerRadius = 80,
                             showTooltip = true,
                             colors = DEFAULT_COLORS,
                             dataKey = "value",
                             nameKey = "name",
                             showTotal = false,
                             totalLabel = "Total",
                             footer,
                             className,
                             ...props
                         }: PieChartProps) {
    // Generate chart data with assigned colors
    const chartData = data.map((item, index) => ({
        [nameKey]: item.name,
        [dataKey]: item.value,
        fill: item.color || colors[index % colors.length]
    }));

    // Create chart configuration
    const chartConfig = useMemo(() => {
        const config: ChartConfig = {
            [dataKey]: {
                label: totalLabel,
            }
        };

        // Add each data item to config
        data.forEach((item, index) => {
            config[item.name] = {
                label: item.name,
                color: item.color || colors[index % colors.length]
            };
        });

        return config;
    }, [data, colors, dataKey, totalLabel]);

    // Calculate total if needed
    const total = useMemo(() => {
        return data.reduce((acc, curr) => acc + curr.value, 0);
    }, [data]);

    return (
        <Card className={cn("flex flex-col", className)} {...props}>
            {(title || description) && (
                <CardHeader className="items-center pb-0">
                    {title && <CardTitle>{title}</CardTitle>}
                    {description && <CardDescription>{description}</CardDescription>}
                </CardHeader>
            )}
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <RechartsPieChart>
                        {showTooltip && (
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent hideLabel/>}
                            />
                        )}
                        <Pie
                            data={chartData}
                            dataKey={dataKey}
                            nameKey={nameKey}
                            innerRadius={innerRadius}
                            outerRadius={outerRadius}
                            strokeWidth={5}
                        >
                            {showTotal && (
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
                                                        {total.toLocaleString()}
                                                    </tspan>
                                                    <tspan
                                                        x={viewBox.cx}
                                                        y={(viewBox.cy || 0) + 24}
                                                        className="fill-muted-foreground"
                                                    >
                                                        {totalLabel}
                                                    </tspan>
                                                </text>
                                            );
                                        }
                                    }}
                                />
                            )}
                        </Pie>
                    </RechartsPieChart>
                </ChartContainer>
            </CardContent>
            {footer && <CardFooter className="flex-col gap-2 text-sm">{footer}</CardFooter>}
        </Card>
    );
}