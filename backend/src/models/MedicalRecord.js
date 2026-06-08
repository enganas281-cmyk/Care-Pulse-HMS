import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
  recordId: { type: String, required: true, unique: true }, // e.g. MR-9001
  patient: { type: String, required: true },
  type: { type: String, required: true },
  author: { type: String, required: true },
  updated: { type: String, required: true },
  status: { type: String, default: 'Completed' }
}, { timestamps: true });

export default mongoose.model('MedicalRecord', medicalRecordSchema);
