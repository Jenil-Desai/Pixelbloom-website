"use client";

import PageContainer from "@/components/layout/PageContainer";
import {Heading} from "@/components/globals/Heading";
import {Separator} from "@/components/ui/separator";
import {useSetAtom} from "jotai/index";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";
import CreateUserForm from "@/sections/users/CreateUserForm";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => {
        setCurrentPageBreadcrumb([
            {title: "Dashboard", link: "/admin"},
            {title: "Users", link: "/admin/users"},
            {title: "Create", link: "/admin/users/create"}
        ])
    }, [setCurrentPageBreadcrumb]);

    return (
        <PageContainer scrollable={true}>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={`Create New User`} description="Add Details For New User"/>
                </div>
                <Separator/>
                <CreateUserForm/>
            </div>
        </PageContainer>
    )
}