import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import Image from "next/image";
import { NavMain } from "./NavMain";
import { artistSidebarLinks } from "./artistSidebarLinks";
import { UserButton } from "@clerk/nextjs";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Image src={"/icons/icon-512.png"} width={30} height={30} alt="Icon" />
          <span className="text-xl font-bold text-black">PixelBloom Studio</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={artistSidebarLinks} />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-center mb-2">
          <UserButton showName={true} />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
