"use client";

import {useSetAtom} from "jotai/index";
import {currentPageBreadcrumbState} from "@/store";
import {useEffect} from "react";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => {
        setCurrentPageBreadcrumb([{title: "Dashboard", link: "/artist"}, {
            title: "Settings",
            link: "/artist/settings"
        }])
    }, [setCurrentPageBreadcrumb]);

    return (
        <div>Hello From Settings Page</div>
    )
}