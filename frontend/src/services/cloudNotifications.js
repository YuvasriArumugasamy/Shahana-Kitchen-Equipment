import { showBrowserNotification } from './firebaseConfig';

// Firebase Web Push VAPID Key for Shahana Kitchen Equipment
export const FIREBASE_VAPID_KEY = 'BOpGEMKjvmUavivLIEvFxKNU88oqt7C-XnCoNkoZO4qwtOEvJGMJPQMAjwzIffb_WVLPPoz8xPYl78OITskEVjw';

// Express Backend & Cloud Storage Endpoints
const RENDER_API_URL = 'https://shahana-kitchen-equipment.onrender.com/api/quotes';
const CLOUD_STORAGE_KEY = 'shahana_cloud_notifications_blob_id';
const DEFAULT_BLOB_ID = '1336630467576406016';
const BASE_URL = 'https://jsonblob.com/api/jsonBlob';

// Helper to get active Blob URL
const getBlobUrl = () => {
  const savedId = localStorage.getItem(CLOUD_STORAGE_KEY) || DEFAULT_BLOB_ID;
  return `${BASE_URL}/${savedId}`;
};

// Initialize Cloud Blob if 404 or missing
const initCloudBlob = async (initialData = []) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(initialData)
    });
    if (res.ok) {
      const location = res.headers.get('Location');
      if (location) {
        const blobId = location.split('/').pop();
        localStorage.setItem(CLOUD_STORAGE_KEY, blobId);
        return `${BASE_URL}/${blobId}`;
      }
    }
  } catch (e) {
    console.warn("Init cloud notifications blob warning:", e);
  }
  return getBlobUrl();
};

// Fetch notifications from Render MongoDB Backend & JsonBlob Cloud API
export const fetchCloudNotifications = async () => {
  let combinedNotifs = [];

  // 1. Fetch from Render MongoDB Backend
  try {
    const backendRes = await fetch(RENDER_API_URL, {
      headers: { 'Accept': 'application/json' }
    });
    if (backendRes.ok) {
      const dbQuotes = await backendRes.json();
      if (Array.isArray(dbQuotes) && dbQuotes.length > 0) {
        const formattedDbQuotes = dbQuotes.map(q => ({
          id: q._id || q.id || Date.now(),
          title: `Quote Request: ${q.name || q.senderName || 'Customer'}`,
          desc: `Product: ${q.product || 'Kitchen Equipment'} | Phone: ${q.phone || q.senderPhone || 'N/A'}`,
          time: q.createdAt ? new Date(q.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recently',
          unread: q.status !== 'Read',
          type: 'quote',
          priority: 'High',
          senderName: q.name || q.senderName,
          senderPhone: q.phone || q.senderPhone,
          product: q.product,
          fullMessage: q.message || q.fullMessage || `Quote request for ${q.product || 'Kitchen Machinery'}`
        }));
        combinedNotifs = [...formattedDbQuotes];
      }
    }
  } catch (err) {
    console.warn("Render Backend fetch warning:", err);
  }

  // 2. Fetch from JsonBlob API
  try {
    let url = getBlobUrl();
    let res = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });

    if (res.status === 404) {
      url = await initCloudBlob(combinedNotifs);
      res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    }

    if (res.ok) {
      const blobNotifs = await res.json();
      if (Array.isArray(blobNotifs)) {
        // Merge without duplicates
        const existingIds = new Set(combinedNotifs.map(n => String(n.id)));
        blobNotifs.forEach(n => {
          if (!existingIds.has(String(n.id))) {
            combinedNotifs.push(n);
          }
        });
      }
    }
  } catch (err) {
    console.warn("JsonBlob fetch warning:", err);
  }

  // 3. Fallback to LocalStorage
  try {
    const local = JSON.parse(localStorage.getItem('shahana_admin_notifications') || '[]');
    if (Array.isArray(local)) {
      const existingIds = new Set(combinedNotifs.map(n => String(n.id)));
      local.forEach(n => {
        if (!existingIds.has(String(n.id))) {
          combinedNotifs.push(n);
        }
      });
    }
  } catch (e) {}

  // Save merged result to LocalStorage
  try {
    localStorage.setItem('shahana_admin_notifications', JSON.stringify(combinedNotifs));
  } catch (e) {}

  return combinedNotifs;
};

// Push a new notification (Customer submit quote or enquiry)
export const pushCloudNotification = async (newNotif) => {
  // Update local storage immediately for zero-delay UI feedback
  let currentList = [];
  try {
    currentList = JSON.parse(localStorage.getItem('shahana_admin_notifications') || '[]');
  } catch (e) {}

  const updatedList = [newNotif, ...currentList.filter(n => String(n.id) !== String(newNotif.id))];
  try {
    localStorage.setItem('shahana_admin_notifications', JSON.stringify(updatedList));
  } catch (e) {}

  // Trigger browser push notification alert
  if (newNotif?.title) {
    showBrowserNotification(
      newNotif.title || 'Shahana Kitchen Equipment Alert',
      newNotif.desc || 'New customer quote request received!'
    );
  }

  // 1. Post to Render MongoDB Backend
  try {
    await fetch(RENDER_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: newNotif.senderName || 'Customer',
        phone: newNotif.senderPhone || 'N/A',
        product: newNotif.product || newNotif.title,
        message: newNotif.fullMessage || newNotif.desc,
        status: 'Unread'
      })
    });
  } catch (err) {
    console.warn("Render Backend post warning:", err);
  }

  // 2. Sync to JsonBlob Cloud API
  try {
    let url = getBlobUrl();
    let res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedList)
    });

    if (!res.ok && res.status === 404) {
      url = await initCloudBlob(updatedList);
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updatedList)
      });
    }
  } catch (err) {
    console.error("JsonBlob push error:", err);
  }

  // Trigger local events for immediate update on active tabs
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('shahana_notification_added', { detail: newNotif }));
  }
};

// Update entire notifications list (Mark read / Delete)
export const updateCloudNotifications = async (updatedList) => {
  try {
    localStorage.setItem('shahana_admin_notifications', JSON.stringify(updatedList));
  } catch (e) {}

  try {
    let url = getBlobUrl();
    let res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedList)
    });

    if (!res.ok && res.status === 404) {
      url = await initCloudBlob(updatedList);
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(updatedList)
      });
    }
  } catch (err) {
    console.error("Cloud notifications update error:", err);
  }
};
