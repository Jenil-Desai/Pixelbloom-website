"use client";

import {currentPageBreadcrumbState} from "@/store";
import {useSetAtom} from "jotai";
import {useEffect} from "react";

export default function Page() {
    const setCurrentPageBreadcrumb = useSetAtom(currentPageBreadcrumbState);

    useEffect(() => {
        setCurrentPageBreadcrumb([{title: "Dashboard", link: "/artist"}])
    }, [setCurrentPageBreadcrumb]);

    return (
        <div>
            Artists Dashboard Page
        </div>
    );
}