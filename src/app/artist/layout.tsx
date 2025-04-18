import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/globals/sidebar/Sidebar";
import DashboardHeader from "@/components/globals/header/DashboardHeader";
import {artistSidebarLinks} from "@/components/globals/sidebar/artistSidebarLinks";

export default function ArtistLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <DashboardSidebar sidebarLinks={artistSidebarLinks}/>
            <SidebarInset>
                <DashboardHeader/>
                <main className="p-2">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}