import { Activity, AlertTriangle, BedDouble, CalendarDays, Clock3, HeartPulse } from "lucide-react";
import MetricCard from "../components/ui/MetricCard.jsx";
import ProgressBar from "../components/ui/ProgressBar.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useFetch from "../utils/useFetch.js";
import { quickActions } from "../routes/navigation.js";

export default function Dashboard() {
  const { data: alerts, loading: loadingalerts } = useFetch('/alerts');
  const { data: appointments, loading: loadingappointments } = useFetch('/appointments');
  const { data: departments, loading: loadingdepartments } = useFetch('/departments');
  const { data: patients, loading: loadingpatients } = useFetch('/patients');
  const { data: reportSeries, loading: loadingreportSeries } = useFetch('/reportseries');
  const { data: stats, loading: loadingstats } = useFetch('/stats');
  if (loadingalerts || loadingappointments || loadingdepartments || loadingpatients || loadingreportSeries || loadingstats) return <div className="p-8 text-slate-500">Loading data...</div>;

  const maxAdmissions = Math.max(...reportSeries.map((item) => item.admissions));

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-6 p-5 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-clinic-700">Tuesday, June 2, 2026</p>
            <h1 className="mt-2 text-3xl font-bold text-ink">Hospital operations dashboard</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Monitor patient flow, appointments, bed occupancy, pharmacy stock, billing activity, and urgent clinical
              alerts from one frontend workspace.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {quickActions.map(({ label, icon: Icon }) => (
                <button
                  className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-slate-50 text-sm font-bold text-slate-700 transition hover:border-clinic-200 hover:bg-clinic-50 hover:text-clinic-700"
                  key={label}
                >
                  <Icon size={17} />
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white/10 p-3">
                <HeartPulse size={26} />
              </div>
              <div>
                <p className="text-sm text-white/70">Live Capacity</p>
                <p className="text-2xl font-bold">82% ER Load</p>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-white/70">ICU beds</span>
                <span className="font-bold">18 / 24</span>
              </div>
              <div className="h-2 rounded-full bg-white/10">
                <div className="h-full w-3/4 rounded-full bg-clinic-500" />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-xl font-bold">14</p>
                  <p className="text-xs text-white/60">ER queue</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-xl font-bold">7</p>
                  <p className="text-xs text-white/60">Transfers</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-xl font-bold">4</p>
                  <p className="text-xs text-white/60">Code watch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <MetricCard key={item.label} {...item} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-clinic-700">Weekly flow</p>
              <h2 className="text-xl font-bold text-ink">Admissions vs discharges</h2>
            </div>
            <Activity className="text-clinic-600" size={22} />
          </div>
          <div className="flex h-64 items-end gap-3">
            {reportSeries.map((item) => (
              <div className="flex flex-1 flex-col items-center gap-2" key={item.label}>
                <div className="flex h-48 w-full items-end justify-center gap-1 rounded-lg bg-slate-50 p-2">
                  <div
                    className="w-3 rounded-t bg-clinic-500 sm:w-5"
                    style={{ height: `${(item.admissions / maxAdmissions) * 100}%` }}
                    title={`${item.admissions} admissions`}
                  />
                  <div
                    className="w-3 rounded-t bg-blue-400 sm:w-5"
                    style={{ height: `${(item.discharges / maxAdmissions) * 100}%` }}
                    title={`${item.discharges} discharges`}
                  />
                </div>
                <span className="text-xs font-bold text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="text-amber-500" size={20} />
              <h2 className="text-lg font-bold text-ink">Operational alerts</h2>
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div className="rounded-lg border border-amber-100 bg-amber-50 px-3 py-2 text-sm text-amber-900" key={alert}>
                  {alert}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <BedDouble className="text-clinic-600" size={20} />
              <h2 className="text-lg font-bold text-ink">Department occupancy</h2>
            </div>
            <div className="space-y-4">
              {departments.slice(0, 4).map((department) => (
                <div className="flex items-center justify-between gap-3" key={department.name}>
                  <span className="text-sm font-semibold text-slate-700">{department.name}</span>
                  <ProgressBar value={department.occupancy} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <CalendarDays className="text-clinic-600" size={20} />
            <h2 className="text-lg font-bold text-ink">Today&apos;s appointments</h2>
          </div>
          <div className="space-y-3">
            {appointments.slice(0, 4).map((appointment) => (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-slate-50 p-3" key={appointment.time}>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-clinic-700 shadow-sm">
                    <Clock3 size={18} />
                  </div>
                  <div>
                    <p className="font-bold text-ink">{appointment.patient}</p>
                    <p className="text-sm text-slate-500">{appointment.time} with {appointment.doctor}</p>
                  </div>
                </div>
                <StatusBadge>{appointment.status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <HeartPulse className="text-rose-500" size={20} />
            <h2 className="text-lg font-bold text-ink">Critical patient watch</h2>
          </div>
          <div className="space-y-3">
            {patients.slice(0, 4).map((patient) => (
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-100 p-3" key={patient.id}>
                <div>
                  <p className="font-bold text-ink">{patient.name}</p>
                  <p className="text-sm text-slate-500">{patient.ward} · {patient.condition}</p>
                </div>
                <StatusBadge>{patient.status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
