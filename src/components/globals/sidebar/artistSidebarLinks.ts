import { BrickWall, LucideProps, User } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

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

export const artistSidebarLinks: SidebarLink[] = [
  {
    title: "Wallpapers",
    url: "/artist/wallpapers",
    icon: BrickWall,
    items: [
      {
        title: "Wallpapers",
        url: "/artist/wallpapers",
      },
      {
        title: "Create",
        url: "/artist/wallpapers/create",
      },
    ],
  },
  {
    title: "Account",
    url: "/artist/account",
    icon: User,
    items: [
      {
        title: "Account",
        url: "/artist/account",
      },
      {
        title: "Settings",
        url: "/artist/settings",
      },
    ],
  },
];
