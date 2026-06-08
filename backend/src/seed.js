import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

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

// Mock Data
import { 
  users, patients, appointments, doctors, departments, admissions, 
  medications, invoices, payments, labTests, rooms, inventory, 
  ambulances, medicalRecords, staff, prescriptions, vitalSigns, 
  notifications, activityLogs 
} from '../../src/data/mockData.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Patient.deleteMany();
    await Appointment.deleteMany();
    await Doctor.deleteMany();
    await Department.deleteMany();
    await Admission.deleteMany();
    await Medication.deleteMany();
    await Invoice.deleteMany();
    await Payment.deleteMany();
    await LabTest.deleteMany();
    await Room.deleteMany();
    await Inventory.deleteMany();
    await Ambulance.deleteMany();
    await MedicalRecord.deleteMany();
    await Staff.deleteMany();
    await Prescription.deleteMany();
    await VitalSign.deleteMany();
    await Notification.deleteMany();
    await ActivityLog.deleteMany();

    console.log('Data Cleared...');

    // Users need to be created one by one to trigger password hashing hook
    for (const user of users) {
      await User.create(user);
    }

    // Remap data to fit schema if necessary
    const mappedPatients = patients.map(p => ({
      ...p,
      patientId: p.id,
      doctorName: p.doctor
    }));

    const mappedAdmissions = admissions.map(a => ({
      ...a,
      admissionId: a.id
    }));
    
    const mappedInvoices = invoices.map(i => ({
      ...i,
      invoiceId: i.id
    }));

    const mappedPayments = payments.map(p => ({
      ...p,
      paymentId: p.id
    }));

    const mappedLabTests = labTests.map(l => ({
      ...l,
      labTestId: l.id
    }));

    const mappedRooms = rooms.map(r => ({
      ...r,
      roomId: r.id
    }));

    const mappedInventory = inventory.map(i => ({
      ...i,
      inventoryId: i.id
    }));

    const mappedAmbulances = ambulances.map(a => ({
      ...a,
      ambulanceId: a.id
    }));

    const mappedMedicalRecords = medicalRecords.map(m => ({
      ...m,
      recordId: m.id
    }));

    const mappedStaff = staff.map(s => ({
      ...s,
      staffId: s.id
    }));

    const mappedPrescriptions = prescriptions.map(p => ({
      ...p,
      prescriptionId: p.id
    }));

    const mappedVitalSigns = vitalSigns.map(v => ({
      ...v,
      vitalSignId: v.id
    }));

    const mappedNotifications = notifications.map(n => ({
      ...n,
      notificationId: n.id
    }));

    const mappedActivityLogs = activityLogs.map(a => ({
      ...a,
      logId: a.id
    }));


    await Patient.insertMany(mappedPatients);
    await Appointment.insertMany(appointments);
    await Doctor.insertMany(doctors);
    await Department.insertMany(departments);
    await Admission.insertMany(mappedAdmissions);
    await Medication.insertMany(medications);
    await Invoice.insertMany(mappedInvoices);
    await Payment.insertMany(mappedPayments);
    await LabTest.insertMany(mappedLabTests);
    await Room.insertMany(mappedRooms);
    await Inventory.insertMany(mappedInventory);
    await Ambulance.insertMany(mappedAmbulances);
    await MedicalRecord.insertMany(mappedMedicalRecords);
    await Staff.insertMany(mappedStaff);
    await Prescription.insertMany(mappedPrescriptions);
    await VitalSign.insertMany(mappedVitalSigns);
    await Notification.insertMany(mappedNotifications);
    await ActivityLog.insertMany(mappedActivityLogs);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error with data import: ${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Patient.deleteMany();
    await Appointment.deleteMany();
    await Doctor.deleteMany();
    await Department.deleteMany();
    await Admission.deleteMany();
    await Medication.deleteMany();
    await Invoice.deleteMany();
    await Payment.deleteMany();
    await LabTest.deleteMany();
    await Room.deleteMany();
    await Inventory.deleteMany();
    await Ambulance.deleteMany();
    await MedicalRecord.deleteMany();
    await Staff.deleteMany();
    await Prescription.deleteMany();
    await VitalSign.deleteMany();
    await Notification.deleteMany();
    await ActivityLog.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error with data destroy: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
