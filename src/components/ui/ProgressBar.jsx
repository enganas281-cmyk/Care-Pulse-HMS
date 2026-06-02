export default function ProgressBar({ value }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-2 w-28 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div className="h-full rounded-full bg-clinic-500" style={{ width: `${value}%` }} />
      </div>
      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{value}%</span>
    </div>
  );
}
