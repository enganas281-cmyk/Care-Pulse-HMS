import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { invoices } from "../data/mockData.js";
import { currency } from "../utils/formatters.js";

const columns = [
  { key: "id", label: "Invoice" },
  { key: "patient", label: "Patient", render: (row) => <span className="font-bold text-ink">{row.patient}</span> },
  { key: "service", label: "Service" },
  { key: "amount", label: "Amount", render: (row) => currency(row.amount) },
  { key: "status", label: "Status", render: (row) => <StatusBadge>{row.status}</StatusBadge> },
];

export default function Billing() {
  return (
    <ModulePage
      action="New Invoice"
      columns={columns}
      description="Review invoices, payment status, insurance cases, and patient service charges."
      eyebrow="Revenue desk"
      fields={[
        { name: "patient", label: "Patient", required: true },
        { name: "service", label: "Service", required: true },
        { name: "amount", label: "Amount", type: "number", min: 0, required: true },
        { name: "status", label: "Status", type: "select", options: ["Paid", "Pending", "Insurance"], required: true },
      ]}
      filterKey="status"
      idPrefix="INV"
      initialRows={invoices}
      title="Billing"
    />
  );
}
