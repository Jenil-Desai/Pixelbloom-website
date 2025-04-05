import {Brush, Image, LucideProps, User, Users} from "lucide-react";
import {ForwardRefExoticComponent, RefAttributes} from "react";

export type SidebarLinkItem = {
    title: string;
    url: string;
};

export type SidebarLink = {
    title: string;
    url: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    items: SidebarLinkItem[];
};

export const adminSidebarLinks: SidebarLink[] = [
    {
        title: "Wallpapers",
        url: "/admin/my-wallpapers",
        icon: Image,
        items: [
            {
                title: "My Wallpapers",
                url: "/admin/my-wallpapers",
            },
            {
                title: "Wallpapers",
                url: "/admin/wallpapers",
            },
            {
                title: "Create",
                url: "/admin/wallpapers/create",
            },
        ],
    },
    {
        title: "Artists",
        url: "/admin/artists",
        icon: Brush,
        items: [
            {
                title: "Artists",
                url: "/admin/artists",
            },
        ],
    },
    {
        title: "Users",
        url: "/admin/users",
        icon: Users,
        items: [
            {
                title: "Users",
                url: "/admin/users",
            },
            {
                title: "Create",
                url: "/admin/users/create",
            },
        ],
    },
    {
        title: "Account",
        url: "/admin/account",
        icon: User,
        items: [
            {
                title: "Account",
                url: "/admin/account",
            },
            {
                title: "Settings",
                url: "/admin/settings",
            },
        ],
    },
];