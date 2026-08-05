import express from 'express';
import Quote from '../models/Quote.js';

const router = express.Router();

// GET all quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST submit new quote request
router.post('/', async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    const savedQuote = await newQuote.save();
    res.status(201).json({ success: true, message: 'Quotation request submitted successfully!', quote: savedQuote });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH update status
router.patch('/:id', async (req, res) => {
  try {
    const updated = await Quote.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE quote request by ID
router.delete('/:id', async (req, res) => {
  try {
    await Quote.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Quote deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
