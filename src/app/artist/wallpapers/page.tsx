"use client";

import {useSetAtom} from "jotai/index";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => {
        setCurrentPageBreadcrumb([{title: "Dashboard", link: "/artist"}, {
            title: "Wallpapers",
            link: "/artist/wallpapers"
        }])
    }, [setCurrentPageBreadcrumb]);

    return (
        <div>Wallpapers</div>
    )
}