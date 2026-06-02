import { useState } from "react";
import { BarChart3, Download, TrendingUp } from "lucide-react";
import PageHeader from "../components/ui/PageHeader.jsx";
import { departments, reportSeries } from "../data/mockData.js";

export default function Reports() {
  const [exported, setExported] = useState(false);
  const totalAdmissions = reportSeries.reduce((sum, item) => sum + item.admissions, 0);
  const totalDischarges = reportSeries.reduce((sum, item) => sum + item.discharges, 0);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Reports"
        eyebrow="Analytics"
        action={exported ? "Exported" : "Export PDF"}
        onAction={() => {
          setExported(true);
          window.setTimeout(() => setExported(false), 1800);
        }}
      >
        Review static operational snapshots for patient flow, occupancy, and departmental performance.
      </PageHeader>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <BarChart3 className="text-clinic-600" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Weekly admissions</p>
          <p className="text-3xl font-bold text-ink dark:text-white">{totalAdmissions}</p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <TrendingUp className="text-blue-600" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Weekly discharges</p>
          <p className="text-3xl font-bold text-ink dark:text-white">{totalDischarges}</p>
        </article>
        <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Download className="text-amber-600" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Avg. occupancy</p>
          <p className="text-3xl font-bold text-ink dark:text-white">
            {Math.round(departments.reduce((sum, item) => sum + item.occupancy, 0) / departments.length)}%
          </p>
        </article>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-bold text-ink dark:text-white">Department performance</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {departments.map((department) => (
            <div className="rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950" key={department.name}>
              <div className="flex items-center justify-between">
                <p className="font-bold text-ink dark:text-white">{department.name}</p>
                <span className="text-sm font-bold text-clinic-700">{department.occupancy}%</span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white dark:bg-slate-800">
                <div className="h-full rounded-full bg-clinic-500" style={{ width: `${department.occupancy}%` }} />
              </div>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{department.staff} staff members assigned</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
