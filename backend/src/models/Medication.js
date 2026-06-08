import mongoose from 'mongoose';

const medicationSchema = new mongoose.Schema({
  item: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  reorder: { type: Number, required: true },
  status: { type: String, default: 'In stock' }
}, { timestamps: true });

export default mongoose.model('Medication', medicationSchema);
