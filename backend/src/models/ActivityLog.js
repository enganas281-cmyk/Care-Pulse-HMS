import mongoose from 'mongoose';

const activityLogSchema = new mongoose.Schema({
  logId: { type: String, required: true, unique: true }, // e.g. LOG-001
  user: { type: String, required: true },
  action: { type: String, required: true },
  module: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'Completed' }
}, { timestamps: true });

export default mongoose.model('ActivityLog', activityLogSchema);
