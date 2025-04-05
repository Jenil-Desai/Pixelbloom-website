"use client";

import {useSetAtom} from "jotai/index";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import {DataTable} from "@/components/globals/data-table/DataTable";
import {columns} from "@/app/admin/artists/columns";
import {useQuery} from "@tanstack/react-query";
import {fetchAllArtist} from "@/queryFn/fetchAllArtists";
import {toast} from "sonner";
import {DataTableSkeleton} from "@/components/globals/data-table/DataTableSkeleton";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);
    const {isError, isPending, data} = useQuery({
        queryKey: ["artists"],
        queryFn: fetchAllArtist,
    })

    useEffect(() => {
        setCurrentPageBreadcrumb([
            {title: "Dashboard", link: "/admin"},
            {title: "Artists", link: "/admin/artists"}
        ])
    }, [setCurrentPageBreadcrumb]);

    if (isError) {
        toast.error("Error", {
            description: "Something went wrong",
            dismissible: true,
        });
        return;
    }

    if (isPending) return <DataTableSkeleton columns={10} rows={5}/>;

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={`Artists`} description="List of Artists"/>
                </div>
                <Separator/>
                <DataTable columns={columns} data={data}/>
            </div>
        </PageContainer>
    )
}