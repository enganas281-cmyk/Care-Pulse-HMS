export const stats = [
  { label: "Patients Today", value: "248", delta: "+12%", tone: "teal" },
  { label: "Available Beds", value: "64", delta: "18 ICU", tone: "blue" },
  { label: "Surgeries", value: "19", delta: "5 urgent", tone: "rose" },
  { label: "Revenue", value: "$84k", delta: "+8.3%", tone: "amber" },
];

export const patients = [
  {
    id: "PT-1001",
    name: "Amina Yusuf",
    age: 34,
    gender: "Female",
    blood: "O+",
    condition: "Hypertension",
    doctor: "Dr. Priya Shah",
    status: "Stable",
    ward: "Cardiology",
  },
  {
    id: "PT-1002",
    name: "Marcus Lee",
    age: 58,
    gender: "Male",
    blood: "A-",
    condition: "Pneumonia",
    doctor: "Dr. Liam Carter",
    status: "Critical",
    ward: "Respiratory",
  },
  {
    id: "PT-1003",
    name: "Sofia Garcia",
    age: 27,
    gender: "Female",
    blood: "B+",
    condition: "Pregnancy",
    doctor: "Dr. Hana Noor",
    status: "Admitted",
    ward: "Maternity",
  },
  {
    id: "PT-1004",
    name: "Noah Brown",
    age: 9,
    gender: "Male",
    blood: "AB+",
    condition: "Asthma",
    doctor: "Dr. Elias Mwangi",
    status: "Observation",
    ward: "Pediatrics",
  },
  {
    id: "PT-1005",
    name: "Fatima Ali",
    age: 44,
    gender: "Female",
    blood: "O-",
    condition: "Diabetes",
    doctor: "Dr. Priya Shah",
    status: "Stable",
    ward: "Endocrinology",
  },
];

export const appointments = [
  {
    time: "08:30",
    patient: "Amina Yusuf",
    doctor: "Dr. Priya Shah",
    type: "Follow-up",
    room: "C-204",
    status: "Checked in",
  },
  {
    time: "09:15",
    patient: "James Wilson",
    doctor: "Dr. Liam Carter",
    type: "Consultation",
    room: "R-112",
    status: "Waiting",
  },
  {
    time: "10:00",
    patient: "Sofia Garcia",
    doctor: "Dr. Hana Noor",
    type: "Ultrasound",
    room: "M-310",
    status: "Scheduled",
  },
  {
    time: "11:45",
    patient: "Noah Brown",
    doctor: "Dr. Elias Mwangi",
    type: "Pediatric review",
    room: "P-108",
    status: "Scheduled",
  },
  {
    time: "14:30",
    patient: "Fatima Ali",
    doctor: "Dr. Priya Shah",
    type: "Lab results",
    room: "C-201",
    status: "Confirmed",
  },
];

export const doctors = [
  {
    name: "Dr. Priya Shah",
    specialty: "Cardiology",
    availability: "On duty",
    patients: 32,
    rating: 4.9,
  },
  {
    name: "Dr. Liam Carter",
    specialty: "Pulmonology",
    availability: "Surgery",
    patients: 24,
    rating: 4.8,
  },
  {
    name: "Dr. Hana Noor",
    specialty: "Obstetrics",
    availability: "On duty",
    patients: 29,
    rating: 4.9,
  },
  {
    name: "Dr. Elias Mwangi",
    specialty: "Pediatrics",
    availability: "Clinic",
    patients: 41,
    rating: 4.7,
  },
];

export const departments = [
  { name: "Emergency", head: "Dr. Amara Stone", beds: 42, occupancy: 82, staff: 68 },
  { name: "Cardiology", head: "Dr. Priya Shah", beds: 36, occupancy: 74, staff: 51 },
  { name: "Maternity", head: "Dr. Hana Noor", beds: 44, occupancy: 67, staff: 57 },
  { name: "Pediatrics", head: "Dr. Elias Mwangi", beds: 28, occupancy: 61, staff: 39 },
  { name: "Orthopedics", head: "Dr. Caleb Rivers", beds: 30, occupancy: 58, staff: 34 },
  { name: "Laboratory", head: "Dr. Mina Patel", beds: 0, occupancy: 92, staff: 26 },
];

export const admissions = [
  { id: "ADM-7421", patient: "Marcus Lee", ward: "Respiratory", bed: "R-14", admitted: "2026-06-01", discharge: "Pending" },
  { id: "ADM-7422", patient: "Sofia Garcia", ward: "Maternity", bed: "M-22", admitted: "2026-06-01", discharge: "2026-06-04" },
  { id: "ADM-7423", patient: "Noah Brown", ward: "Pediatrics", bed: "P-09", admitted: "2026-06-02", discharge: "Observation" },
  { id: "ADM-7424", patient: "Grace Kim", ward: "Orthopedics", bed: "O-17", admitted: "2026-05-31", discharge: "2026-06-03" },
];

export const medications = [
  { item: "Amoxicillin 500mg", category: "Antibiotic", stock: 1240, reorder: 300, status: "In stock" },
  { item: "Insulin Glargine", category: "Endocrine", stock: 186, reorder: 200, status: "Reorder" },
  { item: "Salbutamol Inhaler", category: "Respiratory", stock: 342, reorder: 150, status: "In stock" },
  { item: "Morphine 10mg", category: "Analgesic", stock: 72, reorder: 60, status: "Controlled" },
  { item: "IV Saline 1L", category: "Fluids", stock: 920, reorder: 250, status: "In stock" },
];

export const invoices = [
  { id: "INV-2210", patient: "Amina Yusuf", service: "Cardiology review", amount: 420, status: "Paid" },
  { id: "INV-2211", patient: "Marcus Lee", service: "Inpatient care", amount: 3180, status: "Pending" },
  { id: "INV-2212", patient: "Sofia Garcia", service: "Ultrasound", amount: 260, status: "Paid" },
  { id: "INV-2213", patient: "Grace Kim", service: "Orthopedic surgery", amount: 6400, status: "Insurance" },
];

export const labTests = [
  { id: "LAB-901", patient: "Fatima Ali", test: "HbA1c", priority: "Routine", status: "Completed", eta: "Ready" },
  { id: "LAB-902", patient: "Marcus Lee", test: "Chest panel", priority: "Urgent", status: "Processing", eta: "25 min" },
  { id: "LAB-903", patient: "Sofia Garcia", test: "Prenatal screen", priority: "Routine", status: "Collected", eta: "2 hrs" },
  { id: "LAB-904", patient: "Noah Brown", test: "Allergy panel", priority: "Routine", status: "Scheduled", eta: "Today" },
];

export const reportSeries = [
  { label: "Mon", admissions: 38, discharges: 31 },
  { label: "Tue", admissions: 45, discharges: 29 },
  { label: "Wed", admissions: 41, discharges: 36 },
  { label: "Thu", admissions: 52, discharges: 34 },
  { label: "Fri", admissions: 48, discharges: 42 },
  { label: "Sat", admissions: 36, discharges: 33 },
  { label: "Sun", admissions: 31, discharges: 28 },
];

export const alerts = [
  "ER triage capacity above 80%",
  "Insulin Glargine stock below reorder threshold",
  "Three critical lab reports awaiting physician review",
  "ICU nurse handover scheduled at 19:00",
];

export const staff = [
  { id: "STF-1001", name: "Maya Okafor", role: "Head Nurse", department: "Emergency", shift: "Day", status: "On duty" },
  { id: "STF-1002", name: "Owen Patel", role: "Radiographer", department: "Imaging", shift: "Night", status: "On leave" },
  { id: "STF-1003", name: "Lina Hassan", role: "Pharmacist", department: "Pharmacy", shift: "Day", status: "On duty" },
  { id: "STF-1004", name: "Victor Chen", role: "Lab Technologist", department: "Laboratory", shift: "Evening", status: "Clinic" },
];

export const rooms = [
  { id: "RM-201", name: "ICU Suite 1", type: "ICU", floor: "2", occupancy: "Occupied", status: "Critical" },
  { id: "RM-310", name: "Maternity Room 10", type: "Private", floor: "3", occupancy: "Available", status: "Stable" },
  { id: "RM-108", name: "Pediatric Bay 8", type: "Shared", floor: "1", occupancy: "Cleaning", status: "Observation" },
  { id: "RM-402", name: "Surgical Recovery 2", type: "Recovery", floor: "4", occupancy: "Reserved", status: "Scheduled" },
];

export const inventory = [
  { id: "INV-STK-01", item: "Surgical masks", category: "PPE", quantity: 4800, unit: "pcs", status: "In stock" },
  { id: "INV-STK-02", item: "Syringes 5ml", category: "Consumable", quantity: 920, unit: "pcs", status: "Reorder" },
  { id: "INV-STK-03", item: "Portable ECG", category: "Equipment", quantity: 12, unit: "units", status: "In stock" },
  { id: "INV-STK-04", item: "Oxygen cylinders", category: "Gas", quantity: 38, unit: "units", status: "Controlled" },
];

export const ambulances = [
  { id: "AMB-01", vehicle: "Ambulance Alpha", driver: "Samuel Reed", location: "ER entrance", status: "Available", eta: "Ready" },
  { id: "AMB-02", vehicle: "Ambulance Bravo", driver: "Nadia Omar", location: "North district", status: "Dispatched", eta: "12 min" },
  { id: "AMB-03", vehicle: "Ambulance Charlie", driver: "Peter Walsh", location: "Maintenance", status: "Offline", eta: "2 hrs" },
];

export const medicalRecords = [
  { id: "MR-9001", patient: "Amina Yusuf", type: "Care plan", author: "Dr. Priya Shah", updated: "2026-06-02", status: "Completed" },
  { id: "MR-9002", patient: "Marcus Lee", type: "Critical note", author: "Dr. Liam Carter", updated: "2026-06-02", status: "Processing" },
  { id: "MR-9003", patient: "Sofia Garcia", type: "Prenatal chart", author: "Dr. Hana Noor", updated: "2026-06-01", status: "Completed" },
  { id: "MR-9004", patient: "Noah Brown", type: "Observation note", author: "Dr. Elias Mwangi", updated: "2026-06-02", status: "Collected" },
];
