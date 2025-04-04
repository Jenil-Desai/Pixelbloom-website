"use client";

import {useSetAtom} from "jotai/index";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import Account from "@/sections/account/Account";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => {
        setCurrentPageBreadcrumb([
            {title: "Dashboard", link: "/admin"},
            {title: "Account", link: "/admin/account"}
        ])
    }, [setCurrentPageBreadcrumb]);

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={`Account`} description="Your Personal Details"/>
                </div>
                <Separator/>
                <Account/>
            </div>
        </PageContainer>
    )
}