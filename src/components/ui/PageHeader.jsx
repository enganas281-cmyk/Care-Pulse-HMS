import { Plus, Search } from "lucide-react";

export default function PageHeader({ title, eyebrow, action = "Add Record", children, search, onSearch, onAction, filters }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-semibold text-clinic-700">{eyebrow}</p>
        <h1 className="mt-1 text-2xl font-bold text-ink dark:text-white">{title}</h1>
        {children ? <p className="mt-1 max-w-2xl text-sm text-slate-500 dark:text-slate-400">{children}</p> : null}
      </div>
      <div className="flex min-w-0 flex-col gap-2 sm:flex-row">
        <label className="flex h-10 min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300">
          <Search size={16} />
          <input className="w-full bg-transparent outline-none" placeholder="Search records" value={search ?? ""} onChange={(event) => onSearch?.(event.target.value)} />
        </label>
        {filters}
        <button className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-clinic-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-clinic-700" onClick={onAction}>
          <Plus size={16} />
          {action}
        </button>
      </div>
    </div>
  );
}
