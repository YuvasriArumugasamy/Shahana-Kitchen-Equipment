import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  capacity: { type: String, required: true },
  motor: { type: String, required: true },
  material: { type: String, default: '304 Food Grade Stainless Steel' },
  voltage: { type: String, default: '230V / 415V' },
  price: { type: String, required: true },
  rating: { type: Number, default: 5.0 },
  reviewsCount: { type: Number, default: 1 },
  badge: { type: String, default: 'Manufacturer Quality' },
  image: { type: String, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  applications: [{ type: String }],
  isFeatured: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
