"use client";

import {SidebarTrigger} from "@/components/ui/sidebar";
import {Breadcrumbs} from "@/components/globals/BreadCrumbs";
import {currentPageBreadcrumbState} from "@/store";
import {useAtomValue} from "jotai";
import {UserButton} from "@clerk/nextjs";

export default function DashboardHeader() {
    const currentPageBreadcrumb = useAtomValue(currentPageBreadcrumbState);

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className={"flex items-center gap-4"}>
                <SidebarTrigger/>
                <Breadcrumbs items={currentPageBreadcrumb}/>
            </div>
            <div className={"flex items-center"}>
                <UserButton showName={true}/>
            </div>
        </header>
    )
}