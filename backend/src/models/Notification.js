import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  notificationId: { type: String, required: true, unique: true }, // e.g. NOT-01
  title: { type: String, required: true },
  audience: { type: String, required: true },
  priority: { type: String, default: 'Routine' },
  status: { type: String, default: 'Unread' }
}, { timestamps: true });

export default mongoose.model('Notification', notificationSchema);
