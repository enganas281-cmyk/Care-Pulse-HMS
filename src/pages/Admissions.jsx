import ModulePage from "../components/ModulePage.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "id", label: "Admission" },
  { key: "patient", label: "Patient", render: (row) => <span className="font-bold text-ink">{row.patient}</span> },
  { key: "ward", label: "Ward" },
  { key: "bed", label: "Bed" },
  { key: "admitted", label: "Admitted" },
  { key: "discharge", label: "Discharge Plan" },
];

export default function Admissions() {
  const { data: admissions, loading: loadingadmissions } = useFetch('/admissions');
  if (loadingadmissions) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Admit Patient"
      columns={columns}
      description="Manage bed allocations, ward assignments, admission dates, and expected discharge plans."
      eyebrow="Inpatient flow"
      fields={[
        { name: "patient", label: "Patient", required: true },
        { name: "ward", label: "Ward", required: true },
        { name: "bed", label: "Bed", required: true },
        { name: "admitted", label: "Admitted", type: "date", required: true },
        { name: "discharge", label: "Discharge Plan", required: true },
      ]}
      filterKey="ward"
      idPrefix="ADM"
      initialRows={admissions}
      title="Admissions"
    />
  );
}
