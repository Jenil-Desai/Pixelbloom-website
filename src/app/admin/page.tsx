"use client";

import {currentPageBreadcrumbState} from "@/store";
import {useSetAtom} from "jotai";
import {useEffect} from "react";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import PageContainer from "@/components/layout/PageContainer";
import {useUser} from "@clerk/nextjs";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);
    const {user} = useUser();

    useEffect(() => {
        setCurrentPageBreadcrumb([{title: "Dashboard", link: "/admin"}])
    }, [setCurrentPageBreadcrumb]);

    if (!user) return null;

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={user.fullName as string} description="👋🏻 Welcome Back, Admins!"/>
                </div>
                <Separator/>
                <div className={"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"}></div>
            </div>
        </PageContainer>
    );
}