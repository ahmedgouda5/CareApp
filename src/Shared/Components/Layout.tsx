import { Outlet } from "react-router-dom";
import { AppSidebar } from "../../components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-gray-200 dark:bg-gray-900">
          <SidebarTrigger className="-ml-1" />

          <Navbar />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gray-300 dark:bg-gray-900">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
