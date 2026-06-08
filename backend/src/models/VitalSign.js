import mongoose from 'mongoose';

const vitalSignSchema = new mongoose.Schema({
  vitalSignId: { type: String, required: true, unique: true }, // e.g. VIT-101
  patient: { type: String, required: true },
  ward: { type: String, required: true },
  bp: { type: String, required: true },
  pulse: { type: Number, required: true },
  temperature: { type: Number, required: true },
  status: { type: String, default: 'Stable' }
}, { timestamps: true });

export default mongoose.model('VitalSign', vitalSignSchema);
