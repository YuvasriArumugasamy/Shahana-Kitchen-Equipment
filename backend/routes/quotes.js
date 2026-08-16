import express from 'express';
import webpush from 'web-push';
import Quote from '../models/Quote.js';
import Subscription from '../models/Subscription.js';

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

    // Trigger Push Notifications to all Admin Subscriptions
    try {
      const subscriptions = await Subscription.find({});
      if (subscriptions.length > 0 && process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
        const payload = JSON.stringify({
          title: 'New Quote Request',
          body: `Customer ${savedQuote.name || ''} requested ${savedQuote.product || 'a product'}.`,
          url: '/admin'
        });

        const pushPromises = subscriptions.map(sub => 
          webpush.sendNotification(
            { endpoint: sub.endpoint, keys: sub.keys },
            payload
          ).catch(err => {
            // If subscription is invalid/expired, remove it
            if (err.statusCode === 410 || err.statusCode === 404) {
              return Subscription.deleteOne({ _id: sub._id });
            }
          })
        );
        await Promise.all(pushPromises);
      }
    } catch (pushErr) {
      console.error('Error sending push notifications:', pushErr);
    }

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
