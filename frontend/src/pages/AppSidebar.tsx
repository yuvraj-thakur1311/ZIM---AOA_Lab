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

export default function AppSidebar() {
  return (
    <Sidebar
      collapsible="icon"
      variant="inset"
      className="top-14 h-[calc(100vh-3.5rem)]"
    >
      {/* Trigger positioning logic */}
      <SidebarHeader
        className="
          flex
          px-2
          group-data-[state=expanded]:justify-end
          group-data-[state=collapsed]:justify-start
        "
      >
        <SidebarTrigger />
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive tooltip="Dashboard">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="List">
              <List className="h-4 w-4" />
              <span>List</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
