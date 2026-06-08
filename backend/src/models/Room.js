import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true }, // e.g. RM-201
  name: { type: String, required: true },
  type: { type: String, required: true },
  floor: { type: String, required: true },
  occupancy: { type: String, default: 'Available' },
  status: { type: String, default: 'Stable' }
}, { timestamps: true });

export default mongoose.model('Room', roomSchema);
