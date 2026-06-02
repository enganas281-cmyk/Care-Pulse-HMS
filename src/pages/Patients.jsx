import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { patients } from "../data/mockData.js";

const columns = [
  { key: "id", label: "Patient ID" },
  { key: "name", label: "Name", render: (row) => <span className="font-bold text-ink">{row.name}</span> },
  { key: "age", label: "Age" },
  { key: "gender", label: "Gender" },
  { key: "blood", label: "Blood" },
  { key: "condition", label: "Condition" },
  { key: "doctor", label: "Doctor" },
  { key: "ward", label: "Ward" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Patients() {
  return (
    <ModulePage
      action="Add Patient"
      columns={columns}
      description="Manage active patient profiles, ward assignments, primary physicians, and care status."
      eyebrow="Patient registry"
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "age", label: "Age", type: "number", min: 0, required: true },
        { name: "gender", label: "Gender", type: "select", options: ["Female", "Male", "Other"], required: true },
        { name: "blood", label: "Blood Group", type: "select", options: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"], required: true },
        { name: "condition", label: "Condition", required: true },
        { name: "doctor", label: "Doctor", required: true },
        { name: "ward", label: "Ward", required: true },
        { name: "status", label: "Status", type: "select", options: ["Stable", "Critical", "Admitted", "Observation"], required: true },
      ]}
      filterKey="status"
      idPrefix="PT"
      initialRows={patients}
      title="Patients"
    />
  );
}
