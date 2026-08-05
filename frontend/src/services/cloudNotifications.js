// Cross-device Cloud Notifications Synchronization Service for Shahana Kitchen Equipment
// Enables receiving customer enquiries and quote requests from ANY device (Mobile, Laptop, Tablet, Anywhere in the world!)

// Public Cloud Endpoint ID for Shahana Kitchen Equipment Notifications
const CLOUD_STORAGE_KEY = 'shahana_cloud_blob_id';
const DEFAULT_BLOB_ID = '1336630467576406016'; // Dedicated cloud storage ID for Shahana Kitchen Equipment
const BASE_URL = 'https://jsonblob.com/api/jsonBlob';

// Helper to get active Blob URL
const getBlobUrl = () => {
  const savedId = localStorage.getItem(CLOUD_STORAGE_KEY) || DEFAULT_BLOB_ID;
  return `${BASE_URL}/${savedId}`;
};

// Fetch notifications from Cloud (for cross-device sync)
export const fetchCloudNotifications = async () => {
  try {
    const res = await fetch(getBlobUrl(), {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        // Also save to localStorage as backup
        localStorage.setItem('shahana_admin_notifications', JSON.stringify(data));
        return data;
      }
    }
  } catch (err) {
    console.warn("Cloud fetch warning (falling back to localStorage):", err);
  }
  // Fallback to local storage
  try {
    return JSON.parse(localStorage.getItem('shahana_admin_notifications') || '[]');
  } catch (e) {
    return [];
  }
};

// Push a new notification to Cloud (called when customer submits on ANY device)
export const pushCloudNotification = async (newNotif) => {
  // First update local storage immediately for fast local UI feedback
  let currentList = [];
  try {
    currentList = JSON.parse(localStorage.getItem('shahana_admin_notifications') || '[]');
  } catch (e) {}

  const updatedList = [newNotif, ...currentList.filter(n => n.id !== newNotif.id)];
  localStorage.setItem('shahana_admin_notifications', JSON.stringify(updatedList));

  // Now sync to Cloud API so ALL devices (Admin laptop, phone, etc.) receive it
  try {
    // 1. Fetch latest from cloud to merge
    const cloudNotifs = await fetchCloudNotifications();
    const mergedList = [newNotif, ...cloudNotifs.filter(n => n.id !== newNotif.id)];

    // 2. PUT updated list to cloud
    await fetch(getBlobUrl(), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(mergedList)
    });
  } catch (err) {
    console.error("Cloud push failed:", err);
  }

  // Trigger local events
  window.dispatchEvent(new Event('storage'));
  window.dispatchEvent(new CustomEvent('shahana_notification_added', { detail: newNotif }));
};

// Update entire notifications list on Cloud (mark read / delete)
export const updateCloudNotifications = async (updatedList) => {
  localStorage.setItem('shahana_admin_notifications', JSON.stringify(updatedList));
  try {
    await fetch(getBlobUrl(), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedList)
    });
  } catch (err) {
    console.error("Cloud update failed:", err);
  }
};
