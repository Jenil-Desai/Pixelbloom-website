"use client";

import {useSetAtom} from "jotai/index";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import {Clock} from "lucide-react";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => {
        setCurrentPageBreadcrumb([
            {title: "Dashboard", link: "/admin"},
            {title: "Settings", link: "/admin/settings"}
        ])
    }, [setCurrentPageBreadcrumb]);

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={`Settings`} description="Your Profile, Your Control"/>
                </div>
                <Separator/>
                <div className="col-span-3 flex justify-center items-center h-screen">
                    <div className={"flex flex-col items-center gap-4"}>
                        <Clock size={100} className={"text-gray-500"}/>
                        <p className="text-gray-500">Coming Soon.</p>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}