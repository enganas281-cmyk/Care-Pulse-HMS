import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
  patientId: { type: String, required: true, unique: true }, // e.g. PT-1001
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  blood: { type: String },
  condition: { type: String },
  doctor: { type: String }, 
  status: { type: String, default: 'Stable' },
  ward: { type: String }
}, { timestamps: true });

export default mongoose.model('Patient', patientSchema);
