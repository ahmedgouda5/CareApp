import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "../components/ui/sidebar";
import { SquarePlus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { nav } from "../lib/Links";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();

  return (
    <Sidebar {...props} className="text-gray-300  ">
      {/* HEADER */}
      <SidebarHeader className="px-4 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="bg-green-500 w-9 h-9 rounded-lg flex items-center justify-center font-bold">
            <SquarePlus color="white" size={16} />
          </div>
          <div>
            <p className="font-semibold">PharmaCare</p>
            <p className="text-xs text-gray-200">PRO DASHBOARD</p>
          </div>
        </div>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-2">
        {nav.sections.map((section) => (
          <SidebarGroup key={section.label}>
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase px-3">
              {section.label}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.url === pathname}
                      className="flex justify-between items-center px-3 py-2 rounded-lg"
                    >
                      <Link
                        to={item.url}
                        className="data-active:bg-green-800/50 text-white"
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
            DA
          </div>
          <div>
            <p className="text-sm font-medium">Dr. Ahmed Salem</p>
            <p className="text-xs text-gray-400">Pharmacist Admin</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
