import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "time", label: "Time", render: (row) => <span className="font-bold text-ink">{row.time}</span> },
  { key: "patient", label: "Patient" },
  { key: "doctor", label: "Doctor" },
  { key: "type", label: "Visit Type" },
  { key: "room", label: "Room" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Appointments() {
  const { data: appointments, loading: loadingappointments } = useFetch('/appointments');
  if (loadingappointments) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Book Visit"
      columns={columns}
      description="Coordinate clinic rooms, physician schedules, visit types, and front-desk check-in status."
      eyebrow="Schedule center"
      fields={[
        { name: "time", label: "Time", type: "time", required: true },
        { name: "patient", label: "Patient", required: true },
        { name: "doctor", label: "Doctor", required: true },
        { name: "type", label: "Visit Type", required: true },
        { name: "room", label: "Room", required: true },
        { name: "status", label: "Status", type: "select", options: ["Checked in", "Waiting", "Scheduled", "Confirmed"], required: true },
      ]}
      filterKey="status"
      idPrefix="APT"
      initialRows={appointments}
      title="Appointments"
    />
  );
}
