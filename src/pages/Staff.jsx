import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { staff } from "../data/mockData.js";

const columns = [
  { key: "id", label: "Staff ID" },
  { key: "name", label: "Name", render: (row) => <span className="font-bold text-ink dark:text-white">{row.name}</span> },
  { key: "role", label: "Role" },
  { key: "department", label: "Department" },
  { key: "shift", label: "Shift" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Staff() {
  return (
    <ModulePage
      action="Add Staff"
      columns={columns}
      description="Manage nurses, technicians, pharmacists, administrative staff, shifts, and availability."
      eyebrow="Workforce"
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "role", label: "Role", required: true },
        { name: "department", label: "Department", required: true },
        { name: "shift", label: "Shift", type: "select", options: ["Day", "Evening", "Night"], required: true },
        { name: "status", label: "Status", type: "select", options: ["On duty", "On leave", "Clinic"], required: true },
      ]}
      filterKey="status"
      idPrefix="STF"
      initialRows={staff}
      title="Staff"
    />
  );
}
