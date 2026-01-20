import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "../components/ui/sidebar";

import { Home, List } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="top-14 h-[calc(100vh-3.5rem)] oerflow-y-auto"
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
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Dashboard"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-sidebar-accent" : ""
                }
              >
                <Home className="h-4 w-4" />
                <span>Dashboard</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Orders */}
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Order List"
            >
              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  isActive ? "bg-sidebar-accent" : ""
                }
              >
                <List className="h-4 w-4" />
                <span>Order List</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
