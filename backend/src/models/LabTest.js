import mongoose from 'mongoose';

const labTestSchema = new mongoose.Schema({
  labTestId: { type: String, required: true, unique: true },
  patient: { type: String, required: true },
  test: { type: String, required: true },
  priority: { type: String, default: 'Routine' },
  status: { type: String, default: 'Scheduled' },
  eta: { type: String }
}, { timestamps: true });

export default mongoose.model('LabTest', labTestSchema);
