import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { ambulances } from "../data/mockData.js";

const columns = [
  { key: "id", label: "Unit" },
  { key: "vehicle", label: "Vehicle", render: (row) => <span className="font-bold text-ink dark:text-white">{row.vehicle}</span> },
  { key: "driver", label: "Driver" },
  { key: "location", label: "Location" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
  { key: "eta", label: "ETA" },
];

export default function Ambulance() {
  return (
    <ModulePage
      action="Add Unit"
      columns={columns}
      description="Coordinate ambulance availability, dispatch state, drivers, locations, and estimated arrival times."
      eyebrow="Emergency transport"
      fields={[
        { name: "vehicle", label: "Vehicle", required: true },
        { name: "driver", label: "Driver", required: true },
        { name: "location", label: "Location", required: true },
        { name: "status", label: "Status", type: "select", options: ["Available", "Dispatched", "Offline"], required: true },
        { name: "eta", label: "ETA", required: true },
      ]}
      filterKey="status"
      idPrefix="AMB"
      initialRows={ambulances}
      title="Ambulance"
    />
  );
}
