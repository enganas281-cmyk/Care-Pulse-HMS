import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  time: { type: String, required: true }, // e.g. '08:30' or Date object
  patient: { type: String, required: true },
  doctor: { type: String, required: true },
  type: { type: String, required: true },
  room: { type: String },
  status: { type: String, default: 'Scheduled' }
}, { timestamps: true });

export default mongoose.model('Appointment', appointmentSchema);
