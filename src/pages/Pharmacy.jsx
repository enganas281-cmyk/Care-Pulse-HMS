import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "item", label: "Medication", render: (row) => <span className="font-bold text-ink">{row.item}</span> },
  { key: "category", label: "Category" },
  { key: "stock", label: "Stock" },
  { key: "reorder", label: "Reorder Level" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Pharmacy() {
  const { data: medications, loading: loadingmedications } = useFetch('/medications');
  if (loadingmedications) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Add Medication"
      columns={columns}
      description="Monitor stock levels, controlled medication categories, and reorder requirements."
      eyebrow="Medication inventory"
      fields={[
        { name: "item", label: "Medication", required: true },
        { name: "category", label: "Category", required: true },
        { name: "stock", label: "Stock", type: "number", min: 0, required: true },
        { name: "reorder", label: "Reorder Level", type: "number", min: 0, required: true },
        { name: "status", label: "Status", type: "select", options: ["In stock", "Reorder", "Controlled"], required: true },
      ]}
      filterKey="status"
      idPrefix="MED"
      initialRows={medications}
      title="Pharmacy"
    />
  );
}
