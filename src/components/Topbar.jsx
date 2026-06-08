import { Bell, LogOut, Menu, Moon, Search, Sun } from "lucide-react";
import { useAuth } from "../auth/AuthContext.jsx";

export default function Topbar({ onMenu, darkMode, onToggleTheme }) {
  const { currentUser, logout } = useAuth();

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between gap-3 border-b border-slate-200 bg-white/90 px-4 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90 lg:px-6">
      <button
        aria-label="Open navigation"
        className="rounded-lg border border-slate-200 p-2 text-slate-600 dark:border-slate-700 dark:text-slate-300 lg:hidden"
        onClick={onMenu}
      >
        <Menu size={20} />
      </button>
      <label className="hidden h-11 w-full max-w-xl items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 sm:flex">
        <Search size={18} />
        <input className="w-full bg-transparent outline-none" placeholder="Search patients, doctors, invoices..." />
      </label>
      <div className="ml-auto flex items-center gap-3">
        <button aria-label="Toggle theme" className="rounded-lg border border-slate-200 p-2.5 text-slate-600 dark:border-slate-700 dark:text-slate-300" onClick={onToggleTheme}>
          {darkMode ? <Sun size={19} /> : <Moon size={19} />}
        </button>
        <button aria-label="Notifications" className="relative rounded-lg border border-slate-200 p-2.5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
          <Bell size={19} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
        </button>
        <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            {currentUser?.name?.split(" ").map((part) => part[0]).join("").slice(0, 2) || "CP"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-ink dark:text-white">{currentUser?.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{currentUser?.role}</p>
          </div>
        </div>
        <button aria-label="Sign out" className="rounded-lg border border-slate-200 p-2.5 text-slate-600 dark:border-slate-700 dark:text-slate-300" onClick={logout}>
          <LogOut size={19} />
        </button>
      </div>
    </header>
  );
}
