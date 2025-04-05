import {Skeleton} from "@/components/ui/skeleton";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";

interface DataTableSkeletonProps {
    rows?: number;
    columns?: number;
    showToolbar?: boolean;
    showPagination?: boolean;
}

export function DataTableSkeleton({
                                      rows = 10,
                                      columns = 5,
                                      showToolbar = true,
                                      showPagination = true
                                  }: DataTableSkeletonProps) {
    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <Skeleton className="h-8 w-1/4"/>
                    {showToolbar && (
                        <div className="flex space-x-2">
                            <Skeleton className="h-8 w-20"/>
                            <Skeleton className="h-8 w-20"/>
                        </div>
                    )}
                </div>
                <Separator/>

                {/* Table */}
                <div className="border rounded-md">
                    {/* Table Header */}
                    <div className="flex border-b p-2 bg-muted/30">
                        {[...Array(columns)].map((_, index) => (
                            <div
                                key={`header-${index}`}
                                className="flex-1"
                            >
                                <Skeleton className="h-5 w-[80%]"/>
                            </div>
                        ))}
                    </div>

                    {/* Table Rows */}
                    {[...Array(rows)].map((_, rowIndex) => (
                        <div key={`row-${rowIndex}`} className="flex border-b p-3">
                            {[...Array(columns)].map((_, colIndex) => (
                                <div
                                    key={`cell-${rowIndex}-${colIndex}`}
                                    className="flex-1"
                                >
                                    <Skeleton className="h-4 w-[85%]"/>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                {showPagination && (
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-8 w-20"/>
                            <Skeleton className="h-8 w-20"/>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Skeleton className="h-8 w-8"/>
                            <Skeleton className="h-8 w-8"/>
                            <Skeleton className="h-8 w-8"/>
                            <Skeleton className="h-8 w-8"/>
                        </div>
                    </div>
                )}
            </div>
        </PageContainer>
    );
}