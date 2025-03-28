import {atom} from "jotai";

type currentPageBreadcrumbState = {
    title: string;
    link: string;
}

export const currentPageBreadcrumbState = atom<currentPageBreadcrumbState[]>([{title: "", link: ""}])