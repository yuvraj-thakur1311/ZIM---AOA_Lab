import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";

import Navbar from "./pages/Navbar";
import AppSidebar from "./pages/AppSidebar";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Login from "./components/login/Login";
import ProtectedRoute from "./ProtectedRoute";
function AppLayout() {
  return (
    <SidebarProvider>
      <ProtectedRoute>
        <div className="h-screen w-screen flex flex-col overflow-hidden text-foreground">
          <Navbar />

          <div className="flex flex-1 min-h-0 w-full overflow-hidden">
            <AppSidebar />

            <SidebarInset className="w-full overflow-hidden">
              <main className="h-full w-full p-6 bg-muted/40 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                </Routes>
              </main>
            </SidebarInset>
          </div>
        </div>
      </ProtectedRoute>
    </SidebarProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth route (NO sidebar/navbar) */}
        <Route path="/login" element={<Login />} />

        {/* App routes (WITH sidebar/navbar) */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}
