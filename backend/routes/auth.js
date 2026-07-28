import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

const router = express.Router();

// POST admin login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (email === 'admin@shahanakitchen.com' && password === 'admin123') {
    const token = jwt.sign({ id: 'admin1', email, role: 'admin' }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1d' });
    return res.json({ success: true, token, user: { name: 'Shahana Admin', email, role: 'admin' } });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'secretKey', { expiresIn: '1d' });
    res.json({ success: true, token, user: { name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
