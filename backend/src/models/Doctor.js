import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  availability: { type: String, default: 'On duty' },
  patients: { type: Number, default: 0 },
  rating: { type: Number, default: 0.0 }
}, { timestamps: true });

export default mongoose.model('Doctor', doctorSchema);
