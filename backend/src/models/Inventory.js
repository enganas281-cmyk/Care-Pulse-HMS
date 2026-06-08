import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  inventoryId: { type: String, required: true, unique: true }, // e.g. INV-STK-01
  item: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  status: { type: String, default: 'In stock' }
}, { timestamps: true });

export default mongoose.model('Inventory', inventorySchema);
