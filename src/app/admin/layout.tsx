import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/globals/sidebar/Sidebar";
import DashboardHeader from "@/components/globals/header/DashboardHeader";
import {adminSidebarLinks} from "@/components/globals/sidebar/adminSidebarLinks";

export default function AdminLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <SidebarProvider>
            <DashboardSidebar sidebarLinks={adminSidebarLinks}/>
            <SidebarInset>
                <DashboardHeader/>
                <main className="p-2">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    );
}