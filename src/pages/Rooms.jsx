import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "id", label: "Room" },
  { key: "name", label: "Name", render: (row) => <span className="font-bold text-ink dark:text-white">{row.name}</span> },
  { key: "type", label: "Type" },
  { key: "floor", label: "Floor" },
  { key: "occupancy", label: "Occupancy" },
  { key: "status", label: "Clinical Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Rooms() {
  const { data: rooms, loading: loadingrooms } = useFetch('/rooms');
  if (loadingrooms) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Add Room"
      columns={columns}
      description="Track room availability, cleaning state, reservations, floor assignments, and clinical readiness."
      eyebrow="Bed board"
      fields={[
        { name: "name", label: "Room Name", required: true },
        { name: "type", label: "Type", type: "select", options: ["ICU", "Private", "Shared", "Recovery"], required: true },
        { name: "floor", label: "Floor", required: true },
        { name: "occupancy", label: "Occupancy", type: "select", options: ["Available", "Occupied", "Cleaning", "Reserved"], required: true },
        { name: "status", label: "Clinical Status", type: "select", options: ["Stable", "Critical", "Observation", "Scheduled"], required: true },
      ]}
      filterKey="occupancy"
      idPrefix="RM"
      initialRows={rooms}
      title="Rooms"
    />
  );
}
