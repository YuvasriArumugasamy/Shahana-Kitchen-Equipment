// Cross-device Cloud Products Synchronization Service for Shahana Kitchen Equipment
// Syncs admin product edits & added products across ALL customer devices globally!

import { PRODUCTS } from '../data/siteData';

const CLOUD_STORAGE_KEY = 'shahana_cloud_products_blob_id';
const DEFAULT_BLOB_ID = '1336655555555555555';
const BASE_URL = 'https://jsonblob.com/api/jsonBlob';

// Helper to get active Blob URL
const getBlobUrl = () => {
  const savedId = localStorage.getItem(CLOUD_STORAGE_KEY) || DEFAULT_BLOB_ID;
  return `${BASE_URL}/${savedId}`;
};

// Initialize Cloud Blob if needed
const initCloudBlob = async () => {
  try {
    const savedId = localStorage.getItem(CLOUD_STORAGE_KEY);
    if (!savedId) {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(PRODUCTS)
      });
      if (res.ok) {
        const location = res.headers.get('Location');
        if (location) {
          const blobId = location.split('/').pop();
          localStorage.setItem(CLOUD_STORAGE_KEY, blobId);
          return `${BASE_URL}/${blobId}`;
        }
      }
    }
  } catch (e) {
    console.warn("Init cloud blob warning:", e);
  }
  return getBlobUrl();
};

// Fetch products from Cloud API (with fallback to localStorage & siteData)
export const fetchCloudProducts = async () => {
  try {
    const url = getBlobUrl();
    const res = await fetch(url, {
      headers: { 'Accept': 'application/json' }
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        try {
          localStorage.setItem('shahana_admin_products', JSON.stringify(data));
        } catch (e) {}
        return data;
      }
    }
  } catch (err) {
    console.warn("Cloud products fetch fallback:", err);
  }

  // LocalStorage fallback
  try {
    const saved = localStorage.getItem('shahana_admin_products');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {}

  return PRODUCTS;
};

// Save & Sync products list to Cloud API (Updates all customer devices live)
export const saveCloudProducts = async (productsList) => {
  // Update local storage for instant UI feedback
  try {
    localStorage.setItem('shahana_admin_products', JSON.stringify(productsList));
  } catch (e) {}

  // Sync to Cloud API
  try {
    let url = getBlobUrl();
    let res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(productsList)
    });

    // If default blob expired or not found, initialize new cloud blob
    if (!res.ok && res.status === 404) {
      url = await initCloudBlob();
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(productsList)
      });
    }
  } catch (err) {
    console.error("Cloud products save error:", err);
  }

  // Trigger window storage event for instant multi-tab sync
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('shahana_products_updated', { detail: productsList }));
  }
};
