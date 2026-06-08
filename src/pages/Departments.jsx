import ModulePage from "../components/ModulePage.jsx";
import ProgressBar from "../components/ui/ProgressBar.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "name", label: "Department", render: (row) => <span className="font-bold text-ink">{row.name}</span> },
  { key: "head", label: "Department Head" },
  { key: "beds", label: "Beds" },
  { key: "staff", label: "Staff" },
  { key: "occupancy", label: "Occupancy", render: (row) => <ProgressBar value={row.occupancy} /> },
];

export default function Departments() {
  const { data: departments, loading: loadingdepartments } = useFetch('/departments');
  if (loadingdepartments) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Add Unit"
      columns={columns}
      description="Track capacity, leadership, staffing, and occupancy across clinical departments."
      eyebrow="Hospital units"
      fields={[
        { name: "name", label: "Department", required: true },
        { name: "head", label: "Department Head", required: true },
        { name: "beds", label: "Beds", type: "number", min: 0, required: true },
        { name: "staff", label: "Staff", type: "number", min: 0, required: true },
        { name: "occupancy", label: "Occupancy %", type: "number", min: 0, required: true },
      ]}
      filterKey="name"
      idPrefix="DEP"
      initialRows={departments}
      title="Departments"
    />
  );
}
