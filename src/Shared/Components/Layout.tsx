import { Outlet } from "react-router-dom";
import { AppSidebar } from "../../components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../../components/ui/sidebar";
import Navbar from "./Navbar";
import { Suspense } from "react";
import { DashboardPageSkeleton } from "../../components/PerformanceFallbacks";
import Chat from "../../components/Ai_chat/Chat";

function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 bg-gray-100 dark:bg-gray-900">
          <SidebarTrigger className="-ml-1" />

          <Navbar />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gray-200 dark:bg-gray-900">
          <Suspense fallback={<DashboardPageSkeleton />}>
            <Outlet />
          </Suspense>
          <div className="fixed bottom-4 right-4">
            <Chat />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default Layout;
