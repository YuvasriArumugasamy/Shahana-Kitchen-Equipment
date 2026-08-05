import { showBrowserNotification } from './firebaseConfig';

// Firebase Web Push VAPID Key for Shahana Kitchen Equipment
export const FIREBASE_VAPID_KEY = 'BOpGEMKjvmUavivLIEvFxKNU88oqt7C-XnCoNkoZO4qwtOEvJGMJPQMAjwzIffb_WVLPPoz8xPYl78OITskEVjw';

// Express Backend Endpoint (Render MongoDB)
const RENDER_API_URL = 'https://shahana-kitchen-equipment.onrender.com/api/quotes';

// LocalStorage keys
const LS_KEY = 'shahana_admin_notifications';
const LS_SEEN_IDS = 'shahana_seen_quote_ids';

// Fetch with timeout helper - Render cold start timeout prevent பண்ண
const fetchWithTimeout = (url, options = {}, timeoutMs = 8000) => {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(url, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(timer));
};

// MongoDB quote → notification object format (English)
const formatQuoteAsNotification = (q) => ({
  id: q._id || q.id,
  title: `Quote Request: ${q.name || 'Customer'}`,
  desc: `Product: ${q.product || 'Kitchen Equipment'} (Qty: ${q.quantity || '1'}) | Phone: ${q.phone || 'N/A'} | City: ${q.city || 'N/A'}`,
  time: q.createdAt
    ? new Date(q.createdAt).toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
    : 'Recently',
  unread: q.status === 'Pending' || q.status === 'Unread' || !q.status,
  type: 'quote',
  priority: 'High',
  senderName: q.name,
  senderPhone: q.phone,
  senderEmail: q.email,
  product: q.product,
  company: q.company,
  businessType: q.businessType,
  city: q.city,
  fullMessage: `Customer requested a price quote for ${q.product || 'Kitchen Machinery'} (${q.quantity || '1'} unit(s)). Business Type: ${q.businessType || 'N/A'}. City: ${q.city || 'N/A'}. Company: ${q.company || 'N/A'}. Additional Notes: ${q.message || 'None'}`
});

// Fetch notifications - MongoDB from Render backend
export const fetchCloudNotifications = async () => {
  // Start with whatever is saved in localStorage
  let combinedNotifs = [];
  try {
    const local = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
    if (Array.isArray(local)) combinedNotifs = local;
  } catch (e) {}

  // Fetch fresh quotes from MongoDB backend
  try {
    const backendRes = await fetchWithTimeout(RENDER_API_URL, {
      headers: { 'Accept': 'application/json' }
    }, 10000);

    if (backendRes.ok) {
      const dbQuotes = await backendRes.json();
      if (Array.isArray(dbQuotes) && dbQuotes.length > 0) {
        const fromDB = dbQuotes.map(formatQuoteAsNotification);

        // Merge: DB quotes take precedence (they are the source of truth)
        const dbIds = new Set(fromDB.map(n => String(n.id)));
        // Keep any manual/system notifications that aren't from DB
        const manualNotifs = combinedNotifs.filter(n => !dbIds.has(String(n.id)) && n.type !== 'quote');
        combinedNotifs = [...fromDB, ...manualNotifs];
      }
    }
  } catch (err) {
    console.warn('Render Backend fetch warning (using cached data):', err?.message || err);
    // Use cached localStorage data - already loaded above
  }

  // Save merged result to LocalStorage as cache
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(combinedNotifs));
  } catch (e) {}

  return combinedNotifs;
};

// Push a new notification when customer submits quote
export const pushCloudNotification = async (newNotif) => {
  // 1. Save to localStorage immediately - instant UI feedback
  let currentList = [];
  try {
    currentList = JSON.parse(localStorage.getItem(LS_KEY) || '[]');
  } catch (e) {}

  const updatedList = [newNotif, ...currentList.filter(n => String(n.id) !== String(newNotif.id))];
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(updatedList));
  } catch (e) {}

  // 2. Browser push notification (if permission granted)
  if (newNotif?.title) {
    showBrowserNotification(
      newNotif.title || 'Shahana Kitchen Equipment Alert',
      newNotif.desc || 'புதிய வாடிக்கையாளர் விலை கோரிக்கை வந்துள்ளது!'
    );
  }

  // 3. POST to Render MongoDB Backend - this is the cross-device sync source
  try {
    const res = await fetchWithTimeout(RENDER_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newNotif.senderName || 'Customer',
        phone: newNotif.senderPhone || 'N/A',
        email: newNotif.senderEmail || '',
        product: newNotif.product || newNotif.title,
        company: newNotif.company || '',
        city: newNotif.city || '',
        businessType: newNotif.businessType || '',
        quantity: newNotif.quantity || '1',
        message: newNotif.fullMessage || newNotif.desc,
        status: 'Pending'
      })
    }, 12000);

    if (res.ok) {
      const saved = await res.json();
      console.log('✅ Quote saved to MongoDB:', saved);
    }
  } catch (err) {
    console.warn('Render Backend post warning (saved locally):', err?.message || err);
  }

  // 4. Dispatch events so admin page refreshes immediately (same browser)
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('shahana_notification_added', { detail: newNotif }));
  }
};

// Update entire notifications list (Mark read / Delete sync)
export const updateCloudNotifications = async (updatedList) => {
  // Save to localStorage
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(updatedList));
  } catch (e) {}

  // Sync read/delete status to MongoDB for quote-type notifications
  try {
    const readQuotes = updatedList.filter(n => n.type === 'quote' && !n.unread && n.id);
    for (const q of readQuotes) {
      const mongoId = q.id;
      if (!mongoId || mongoId.toString().length !== 24) continue; // skip non-MongoDB ids
      fetchWithTimeout(`${RENDER_API_URL}/${mongoId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Contacted' })
      }, 5000).catch(() => {});
    }
  } catch (e) {}
};
