import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader} from "@/components/ui/sidebar";
import Image from "next/image";
import {NavMain} from "./NavMain";
import {artistSidebarLinks} from "./artistSidebarLinks";
import {SignOutButton} from "@clerk/nextjs";
import {LogOut} from "lucide-react";

export default function ArtistSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className={"border-b"}>
                <div className="flex items-center justify-center gap-2 mt-2">
                    <Image src={"/icons/icon-512.png"} width={38} height={38} alt="Icon"/>
                    <span className="text-xl font-bold text-black">PixelBloom Studio</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={artistSidebarLinks}/>
            </SidebarContent>
            <SidebarFooter className={"border-t"}>
                <div className="flex items-center justify-center mb-2 cursor-pointer">
                    <SignOutButton redirectUrl={"/"}>
                        <div className={"flex items-center gap-2"}>
                            <LogOut size={20}/>
                            <p>Sign Out</p>
                        </div>
                    </SignOutButton>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}