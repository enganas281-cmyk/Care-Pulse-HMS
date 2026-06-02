import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { labTests } from "../data/mockData.js";

const columns = [
  { key: "id", label: "Lab ID" },
  { key: "patient", label: "Patient", render: (row) => <span className="font-bold text-ink">{row.patient}</span> },
  { key: "test", label: "Test" },
  { key: "priority", label: "Priority", render: (row) => <StatusBadge>{row.priority}</StatusBadge> },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
  { key: "eta", label: "ETA" },
];

export default function Laboratory() {
  return (
    <ModulePage
      action="Order Test"
      columns={columns}
      description="Follow diagnostic requests from collection through processing, review, and release."
      eyebrow="Diagnostic queue"
      fields={[
        { name: "patient", label: "Patient", required: true },
        { name: "test", label: "Test", required: true },
        { name: "priority", label: "Priority", type: "select", options: ["Routine", "Urgent"], required: true },
        { name: "status", label: "Status", type: "select", options: ["Completed", "Processing", "Collected", "Scheduled"], required: true },
        { name: "eta", label: "ETA", required: true },
      ]}
      filterKey="status"
      idPrefix="LAB"
      initialRows={labTests}
      title="Laboratory"
    />
  );
}
