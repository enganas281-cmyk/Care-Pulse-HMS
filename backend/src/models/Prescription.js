import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema({
  prescriptionId: { type: String, required: true, unique: true }, // e.g. RX-1001
  patient: { type: String, required: true },
  medication: { type: String, required: true },
  dosage: { type: String, required: true },
  doctor: { type: String, required: true },
  status: { type: String, default: 'Active' }
}, { timestamps: true });

export default mongoose.model('Prescription', prescriptionSchema);
