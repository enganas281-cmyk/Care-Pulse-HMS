import mongoose from 'mongoose';

const ambulanceSchema = new mongoose.Schema({
  ambulanceId: { type: String, required: true, unique: true }, // e.g. AMB-01
  vehicle: { type: String, required: true },
  driver: { type: String, required: true },
  location: { type: String, required: true },
  status: { type: String, default: 'Available' },
  eta: { type: String }
}, { timestamps: true });

export default mongoose.model('Ambulance', ambulanceSchema);
