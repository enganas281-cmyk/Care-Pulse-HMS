import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="flex min-h-screen bg-slate-50 text-ink dark:bg-slate-950">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-w-0 flex-1">
        <Topbar darkMode={darkMode} onMenu={() => setSidebarOpen(true)} onToggleTheme={() => setDarkMode((value) => !value)} />
        <main className="medical-grid min-h-[calc(100vh-5rem)] p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
