import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "../components/ui/sidebar";

import { LayoutDashboardIcon, List, Stethoscope } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-600 dark:border-gray-800"

    >
      <SidebarHeader
        className="
          flex px-2
          group-data-[state=expanded]:justify-end
          group-data-[state=collapsed]:justify-start
        "
      >
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>


         
          <SidebarMenuItem className="px-[8px] pb-[4px] pt-[4px]">
            <NavLink to="/" end>
              {({ isActive }) => (
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip="Dashboard"
                  className="cursor-pointer  data-[active=true]:bg-black data-[active=true]:text-white"
                >
                  <div className={` flex items-center justify-center rounded-md`}>
                    <LayoutDashboardIcon className="h-4 w-4" />
                  </div>
                  <span className="group-data-[state=collapsed]:hidden">Dashboard</span>

                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>

          <SidebarMenuItem className="px-[8px]  pb-[4px] ">
            <NavLink to="/orders" end>
              {({ isActive }) => (
                <SidebarMenuButton
                  isActive={isActive}
                  tooltip="order list"
                  className="cursor-pointer data-[active=true]:bg-black  data-[active=true]:text-white"
                >
                  <div className={`flex items-center justify-center rounded-md `}>
                    <List className="h-4 w-4" />
                    

                  </div>
                  <span className="group-data-[state=collapsed]:hidden">Order List</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
          
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}