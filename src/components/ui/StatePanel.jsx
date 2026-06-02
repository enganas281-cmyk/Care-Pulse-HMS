import { AlertTriangle, Loader2, RotateCcw } from "lucide-react";

export function LoadingState({ label = "Loading records" }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <Loader2 className="mx-auto animate-spin text-clinic-600" size={28} />
      <p className="mt-3 text-sm font-semibold text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  );
}

export function ErrorState({ onRetry }) {
  return (
    <div className="rounded-lg border border-rose-200 bg-rose-50 p-8 text-center shadow-sm dark:border-rose-900/50 dark:bg-rose-950/30">
      <AlertTriangle className="mx-auto text-rose-600" size={28} />
      <h3 className="mt-3 font-bold text-rose-900 dark:text-rose-100">Could not load this module</h3>
      <p className="mt-1 text-sm text-rose-700 dark:text-rose-200">This frontend demo recovered locally. Retry to restore the table view.</p>
      <button
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-rose-600 px-4 py-2 text-sm font-bold text-white"
        onClick={onRetry}
      >
        <RotateCcw size={16} />
        Retry
      </button>
    </div>
  );
}
