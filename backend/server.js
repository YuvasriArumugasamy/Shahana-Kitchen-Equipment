import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import productRoutes from './routes/products.js';
import quoteRoutes from './routes/quotes.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database Connection
connectDB();

// API Routes
app.use('/api/products', productRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/auth', authRoutes);

// Root Health Check Route
app.get('/', (req, res) => {
  res.json({
    status: 'Active',
    company: 'Shahana Kitchen Equipment B2B Backend API',
    version: '1.0.0',
    timestamp: new Date()
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Express Server] Running on http://localhost:${PORT}`);
});
