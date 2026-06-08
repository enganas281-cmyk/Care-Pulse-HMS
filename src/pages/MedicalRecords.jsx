import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "id", label: "Record ID" },
  { key: "patient", label: "Patient", render: (row) => <span className="font-bold text-ink dark:text-white">{row.patient}</span> },
  { key: "type", label: "Type" },
  { key: "author", label: "Author" },
  { key: "updated", label: "Updated" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function MedicalRecords() {
  const { data: medicalRecords, loading: loadingmedicalRecords } = useFetch('/medicalrecords');
  if (loadingmedicalRecords) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Add Record"
      columns={columns}
      description="Maintain frontend medical record summaries, authorship, update dates, and review status."
      eyebrow="Clinical documentation"
      fields={[
        { name: "patient", label: "Patient", required: true },
        { name: "type", label: "Record Type", required: true },
        { name: "author", label: "Author", required: true },
        { name: "updated", label: "Updated", type: "date", required: true },
        { name: "status", label: "Status", type: "select", options: ["Completed", "Processing", "Collected", "Scheduled"], required: true },
      ]}
      filterKey="status"
      idPrefix="MR"
      initialRows={medicalRecords}
      title="Medical Records"
    />
  );
}
