"use client";

import PageContainer from "@/components/layout/PageContainer";
import {Separator} from "@/components/ui/separator";
import {Heading} from "@/components/globals/Heading";
import CreateWallpaperForm from "@/sections/wallpaper/create/CreateWallpaperForm";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";
import {useSetAtom} from "jotai";

export default function AdminNewUserPage() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => setCurrentPageBreadcrumb([
        {title: "Dashboard", link: "/admin"},
        {title: "Wallpapers", link: "/admin/wallpapers"},
        {title: "New", link: "/admin/wallpapers/create"},
    ]), [setCurrentPageBreadcrumb]);

    return (
        <PageContainer scrollable>
            <div className="space-y-4">
                <div className="flex items-start justify-between">
                    <Heading title={`Upload New Wallpaper`} description="Add Details For New Wallpaper"/>
                </div>
                <Separator/>
                <CreateWallpaperForm/>
            </div>
        </PageContainer>
    );
}