// Firebase Cloud Messaging & Web Push Configuration for Shahana Kitchen Equipment

export const FIREBASE_VAPID_KEY = 'BOpGEMKjvmUavivLIEvFxKNU88oqt7C-XnCoNkoZO4qwtOEvJGMJPQMAjwzIffb_WVLPPoz8xPYl78OITskEVjw';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyShahanaKitchenEquipmentKey",
  authDomain: "shahana-kitchen-equipment.firebaseapp.com",
  projectId: "shahana-kitchen-equipment",
  storageBucket: "shahana-kitchen-equipment.appspot.com",
  messagingSenderId: "1020760953711",
  appId: "1:1020760953711:web:NGZjMzAwODktNGFmMi00ZDg4LWJkYmYmltOTUzWfHOtgy"
};

// Request Web Push Notification Permission
export const requestPushPermission = async () => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    console.warn('Browser does not support desktop notifications');
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      return true;
    }
  } catch (err) {
    console.error('Error requesting notification permission:', err);
  }
  return false;
};

// Trigger Local Browser Push Notification (when quote / enquiry arrives)
export const showBrowserNotification = (title, body, icon = '/favicon.ico') => {
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    try {
      new Notification(title, {
        body,
        icon,
        badge: icon,
        vibrate: [200, 100, 200]
      });
    } catch (e) {
      console.warn('Could not trigger native browser notification:', e);
    }
  }
};
