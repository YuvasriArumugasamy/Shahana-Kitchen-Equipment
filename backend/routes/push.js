import express from 'express';
import webpush from 'web-push';
import Subscription from '../models/Subscription.js';

const router = express.Router();

// Initialize web-push if keys are available
if (process.env.VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    'mailto:contact@shahanakitchenequipment.shop',
    process.env.VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

// Route to get VAPID Public Key
router.get('/vapidPublicKey', (req, res) => {
  if (!process.env.VAPID_PUBLIC_KEY) {
    return res.status(500).json({ error: 'VAPID public key not configured on server' });
  }
  res.json({ publicKey: process.env.VAPID_PUBLIC_KEY });
});

// Route to save Push Subscription
router.post('/subscribe', async (req, res) => {
  const subscription = req.body;

  if (!subscription || !subscription.endpoint) {
    return res.status(400).json({ error: 'Invalid subscription object' });
  }

  try {
    // Check if subscription already exists based on endpoint
    const existing = await Subscription.findOne({ endpoint: subscription.endpoint });
    
    if (!existing) {
      const newSub = new Subscription(subscription);
      await newSub.save();
    }
    
    res.status(201).json({ success: true, message: 'Subscription saved.' });
  } catch (error) {
    console.error('Error saving subscription:', error);
    res.status(500).json({ error: 'Failed to save subscription.' });
  }
});

export default router;
