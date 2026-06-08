import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  head: { type: String, required: true },
  beds: { type: Number, default: 0 },
  occupancy: { type: Number, default: 0 },
  staff: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Department', departmentSchema);
