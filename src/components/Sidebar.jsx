import { NavLink } from "react-router-dom";
import { Cross, ShieldCheck } from "lucide-react";
import { navigation } from "../routes/navigation.js";
import { classNames } from "../utils/formatters.js";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 z-30 bg-slate-950/40 transition lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
      />
      <aside
        className={classNames(
          "fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-200 bg-white transition-transform dark:border-slate-800 dark:bg-slate-950 lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-5 dark:border-slate-800">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-clinic-600 text-white">
            <Cross size={24} />
          </div>
          <div>
            <p className="text-lg font-bold text-ink dark:text-white">CarePulse</p>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Hospital System</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4 scrollbar-thin">
          {navigation.map(({ label, path, icon: Icon }) => (
            <NavLink
              className={({ isActive }) =>
                classNames(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition",
                  isActive
                    ? "bg-clinic-50 text-clinic-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-ink dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                )
              }
              end={path === "/"}
              key={path}
              onClick={onClose}
              to={path}
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="m-4 rounded-lg border border-clinic-100 bg-clinic-50 p-4 dark:border-clinic-900/70 dark:bg-clinic-950/30">
          <div className="flex items-center gap-2 text-sm font-bold text-clinic-800">
            <ShieldCheck size={18} />
            Secure Front Desk
          </div>
          <p className="mt-2 text-sm text-clinic-900/70">Role-based UI mockup with static demo records.</p>
        </div>
      </aside>
    </>
  );
}
