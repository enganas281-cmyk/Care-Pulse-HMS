import { ArrowUpRight } from "lucide-react";

const styles = {
  teal: "bg-clinic-50 text-clinic-700 ring-clinic-100",
  blue: "bg-blue-50 text-blue-700 ring-blue-100",
  rose: "bg-rose-50 text-rose-700 ring-rose-100",
  amber: "bg-amber-50 text-amber-700 ring-amber-100",
};

export default function MetricCard({ label, value, delta, tone = "teal" }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
        <span className={`rounded-full p-2 ring-1 ${styles[tone]}`}>
          <ArrowUpRight size={16} />
        </span>
      </div>
      <p className="mt-4 text-3xl font-bold text-ink dark:text-white">{value}</p>
      <p className="mt-1 text-sm font-semibold text-clinic-700">{delta}</p>
    </article>
  );
}
