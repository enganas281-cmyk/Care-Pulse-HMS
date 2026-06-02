import ModulePage from "../components/ModulePage.jsx";
import StatusBadge from "../components/ui/StatusBadge.jsx";
import { doctors } from "../data/mockData.js";

const columns = [
  { key: "name", label: "Doctor", render: (row) => <span className="font-bold text-ink dark:text-white">{row.name}</span> },
  { key: "specialty", label: "Specialty" },
  { key: "availability", label: "Availability", render: (row) => <StatusBadge>{row.availability}</StatusBadge> },
  { key: "patients", label: "Patients" },
  { key: "rating", label: "Rating" },
];

export default function Doctors() {
  return (
    <ModulePage
      action="Add Doctor"
      columns={columns}
      description="View physician availability, specialties, assigned patient load, and satisfaction ratings."
      eyebrow="Clinical staff"
      fields={[
        { name: "name", label: "Doctor Name", required: true },
        { name: "specialty", label: "Specialty", required: true },
        { name: "availability", label: "Availability", type: "select", options: ["On duty", "Surgery", "Clinic", "On leave"], required: true },
        { name: "patients", label: "Active Patients", type: "number", min: 0, required: true },
        { name: "rating", label: "Rating", type: "number", min: 0, required: true },
      ]}
      filterKey="availability"
      idPrefix="DOC"
      initialRows={doctors}
      title="Doctors"
    />
  );
}
