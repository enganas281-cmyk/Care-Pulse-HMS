const tones = {
  Stable: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Critical: "bg-rose-50 text-rose-700 ring-rose-200",
  Admitted: "bg-blue-50 text-blue-700 ring-blue-200",
  Observation: "bg-amber-50 text-amber-700 ring-amber-200",
  "Checked in": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Waiting: "bg-amber-50 text-amber-700 ring-amber-200",
  Scheduled: "bg-slate-50 text-slate-700 ring-slate-200",
  Confirmed: "bg-blue-50 text-blue-700 ring-blue-200",
  "On duty": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Surgery: "bg-rose-50 text-rose-700 ring-rose-200",
  Clinic: "bg-blue-50 text-blue-700 ring-blue-200",
  "In stock": "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Reorder: "bg-amber-50 text-amber-700 ring-amber-200",
  Controlled: "bg-purple-50 text-purple-700 ring-purple-200",
  Paid: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Pending: "bg-amber-50 text-amber-700 ring-amber-200",
  Insurance: "bg-blue-50 text-blue-700 ring-blue-200",
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Processing: "bg-blue-50 text-blue-700 ring-blue-200",
  Collected: "bg-amber-50 text-amber-700 ring-amber-200",
  Urgent: "bg-rose-50 text-rose-700 ring-rose-200",
  Routine: "bg-slate-50 text-slate-700 ring-slate-200",
};

export default function StatusBadge({ children }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
        tones[children] || "bg-slate-50 text-slate-700 ring-slate-200"
      }`}
    >
      {children}
    </span>
  );
}
