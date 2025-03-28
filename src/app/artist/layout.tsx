import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import ArtistSidebar from "@/components/globals/sidebar/Sidebar";
import DashboardHeader from "@/components/globals/header/DashboardHeader";

export default function ArtistLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <ArtistSidebar/>
            <SidebarInset>
                <DashboardHeader/>
                <main className="p-2">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}