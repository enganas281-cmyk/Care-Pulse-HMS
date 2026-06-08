import mongoose from 'mongoose';

const staffSchema = new mongoose.Schema({
  staffId: { type: String, required: true, unique: true }, // e.g. STF-1001
  name: { type: String, required: true },
  role: { type: String, required: true },
  department: { type: String, required: true },
  shift: { type: String, required: true },
  status: { type: String, default: 'On duty' }
}, { timestamps: true });

export default mongoose.model('Staff', staffSchema);
