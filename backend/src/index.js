import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// Models
import User from './models/User.js';
import Patient from './models/Patient.js';
import Appointment from './models/Appointment.js';
import Doctor from './models/Doctor.js';
import Department from './models/Department.js';
import Admission from './models/Admission.js';
import Medication from './models/Medication.js';
import Invoice from './models/Invoice.js';
import Payment from './models/Payment.js';
import LabTest from './models/LabTest.js';
import Room from './models/Room.js';
import Inventory from './models/Inventory.js';
import Ambulance from './models/Ambulance.js';
import MedicalRecord from './models/MedicalRecord.js';
import Staff from './models/Staff.js';
import Prescription from './models/Prescription.js';
import VitalSign from './models/VitalSign.js';
import Notification from './models/Notification.js';
import ActivityLog from './models/ActivityLog.js';

// Routes
import authRoutes from './routes/authRoutes.js';
import createGenericRouter from './routes/genericRouter.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Auth Route
app.use('/api/auth', authRoutes);

// Generic CRUD Routes
app.use('/api/users', createGenericRouter(User, ['Admin']));
app.use('/api/patients', createGenericRouter(Patient, ['Admin', 'Doctor', 'Nurse', 'Receptionist']));
app.use('/api/appointments', createGenericRouter(Appointment, ['Admin', 'Doctor', 'Receptionist']));
app.use('/api/doctors', createGenericRouter(Doctor, ['Admin']));
app.use('/api/departments', createGenericRouter(Department, ['Admin']));
app.use('/api/admissions', createGenericRouter(Admission, ['Admin', 'Doctor', 'Nurse']));
app.use('/api/medications', createGenericRouter(Medication, ['Admin', 'Doctor', 'Nurse']));
app.use('/api/invoices', createGenericRouter(Invoice, ['Admin', 'Accountant']));
app.use('/api/payments', createGenericRouter(Payment, ['Admin', 'Accountant']));
app.use('/api/labtests', createGenericRouter(LabTest, ['Admin', 'Doctor', 'Nurse']));
app.use('/api/rooms', createGenericRouter(Room, ['Admin', 'Nurse']));
app.use('/api/inventory', createGenericRouter(Inventory, ['Admin', 'Nurse']));
app.use('/api/ambulances', createGenericRouter(Ambulance, ['Admin', 'Receptionist']));
app.use('/api/medicalrecords', createGenericRouter(MedicalRecord, ['Admin', 'Doctor']));
app.use('/api/staff', createGenericRouter(Staff, ['Admin']));
app.use('/api/prescriptions', createGenericRouter(Prescription, ['Admin', 'Doctor']));
app.use('/api/vitalsigns', createGenericRouter(VitalSign, ['Admin', 'Doctor', 'Nurse']));
app.use('/api/notifications', createGenericRouter(Notification));
app.use('/api/activitylogs', createGenericRouter(ActivityLog, ['Admin']));

app.get('/', (req, res) => {
  res.send('CarePulse API is running...');
});

// Custom endpoints for Dashboard
app.get('/api/stats', (req, res) => {
  res.json([
    { label: "Patients Today", value: "248", delta: "+12%", tone: "teal" },
    { label: "Available Beds", value: "64", delta: "18 ICU", tone: "blue" },
    { label: "Surgeries", value: "19", delta: "5 urgent", tone: "rose" },
    { label: "Revenue", value: "$84k", delta: "+8.3%", tone: "amber" },
  ]);
});

app.get('/api/reportseries', (req, res) => {
  res.json([
    { label: "Mon", admissions: 38, discharges: 31 },
    { label: "Tue", admissions: 45, discharges: 29 },
    { label: "Wed", admissions: 41, discharges: 36 },
    { label: "Thu", admissions: 52, discharges: 34 },
    { label: "Fri", admissions: 48, discharges: 42 },
    { label: "Sat", admissions: 36, discharges: 33 },
    { label: "Sun", admissions: 31, discharges: 28 },
  ]);
});

app.get('/api/alerts', (req, res) => {
  res.json([
    "ER triage capacity above 80%",
    "Insulin Glargine stock below reorder threshold",
    "Three critical lab reports awaiting physician review",
    "ICU nurse handover scheduled at 19:00",
  ]);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
