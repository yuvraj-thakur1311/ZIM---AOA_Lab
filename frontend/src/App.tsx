import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import Navbar from "./pages/Navbar";
import AppSidebar from "./pages/AppSidebar";

export default function App() {
  return (
    <SidebarProvider>
      <div className="h-screen w-screen flex flex-col">

        <Navbar />

        <div className="flex flex-1 min-h-0 w-full">
          <AppSidebar />

          <SidebarInset className="w-full">
            <main className="flex-1 w-full p-6 bg-muted/40">
              <h2 className="text-2xl font-semibold">Dashboard</h2>
            </main>
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
