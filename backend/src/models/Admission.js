import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  admissionId: { type: String, required: true, unique: true }, // e.g. ADM-7421
  patient: { type: String, required: true },
  ward: { type: String, required: true },
  bed: { type: String, required: true },
  admitted: { type: String, required: true },
  discharge: { type: String, default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Admission', admissionSchema);
