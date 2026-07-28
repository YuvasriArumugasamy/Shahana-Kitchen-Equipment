import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  phone: { type: String, required: true },
  email: { type: String },
  product: { type: String, required: true },
  quantity: { type: String, default: '1' },
  businessType: { type: String, default: 'Hotel / Restaurant' },
  city: { type: String },
  message: { type: String },
  status: { type: String, enum: ['Pending', 'Contacted', 'Completed'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Quote', quoteSchema);
