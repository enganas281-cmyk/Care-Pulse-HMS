import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout.jsx";
import Admissions from "./pages/Admissions.jsx";
import Ambulance from "./pages/Ambulance.jsx";
import Appointments from "./pages/Appointments.jsx";
import Billing from "./pages/Billing.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Departments from "./pages/Departments.jsx";
import Doctors from "./pages/Doctors.jsx";
import Inventory from "./pages/Inventory.jsx";
import Laboratory from "./pages/Laboratory.jsx";
import MedicalRecords from "./pages/MedicalRecords.jsx";
import Patients from "./pages/Patients.jsx";
import Pharmacy from "./pages/Pharmacy.jsx";
import Reports from "./pages/Reports.jsx";
import Rooms from "./pages/Rooms.jsx";
import Settings from "./pages/Settings.jsx";
import Staff from "./pages/Staff.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="patients" element={<Patients />} />
        <Route path="appointments" element={<Appointments />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="staff" element={<Staff />} />
        <Route path="departments" element={<Departments />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="pharmacy" element={<Pharmacy />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="billing" element={<Billing />} />
        <Route path="laboratory" element={<Laboratory />} />
        <Route path="records" element={<MedicalRecords />} />
        <Route path="ambulance" element={<Ambulance />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
