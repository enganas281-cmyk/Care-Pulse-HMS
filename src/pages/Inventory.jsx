import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import useFetch from "../utils/useFetch.js";

const columns = [
  { key: "id", label: "Stock ID" },
  { key: "item", label: "Item", render: (row) => <span className="font-bold text-ink dark:text-white">{row.item}</span> },
  { key: "category", label: "Category" },
  { key: "quantity", label: "Quantity" },
  { key: "unit", label: "Unit" },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Inventory() {
  const { data: inventory, loading: loadinginventory } = useFetch('/inventory');
  if (loadinginventory) return <div className="p-8 text-slate-500">Loading data...</div>;

  return (
    <ModulePage
      action="Add Supply"
      columns={columns}
      description="Control non-pharmacy hospital supplies, equipment quantities, reorder risks, and controlled stock."
      eyebrow="Supply chain"
      fields={[
        { name: "item", label: "Item", required: true },
        { name: "category", label: "Category", required: true },
        { name: "quantity", label: "Quantity", type: "number", min: 0, required: true },
        { name: "unit", label: "Unit", required: true },
        { name: "status", label: "Status", type: "select", options: ["In stock", "Reorder", "Controlled"], required: true },
      ]}
      filterKey="status"
      idPrefix="STK"
      initialRows={inventory}
      title="Inventory"
    />
  );
}
