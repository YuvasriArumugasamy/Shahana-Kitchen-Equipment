// Firebase Cloud Messaging & Web Push Configuration for Shahana Kitchen Equipment

export const FIREBASE_VAPID_KEY = 'BOpGEMKjvmUavivLIEvFxKNU88oqt7C-XnCoNkoZO4qwtOEvJGMJPQMAjwzIffb_WVLPPoz8xPYl78OITskEVjw';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCEHKtVKKVKdldq1389A-45UN54AlT8qwo",
  authDomain: "shahana-kitchen-equipment.firebaseapp.com",
  projectId: "shahana-kitchen-equipment",
  storageBucket: "shahana-kitchen-equipment.firebasestorage.app",
  messagingSenderId: "1020760953711",
  appId: "1:1020760953711:web:68969de877e1d85fbece9a",
  measurementId: "G-LGGXVTGLXZ"
};

// Base64 to Uint8Array converter
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

// Request Web Push Notification Permission and Subscribe
export const requestPushPermission = async () => {
  if (typeof window === 'undefined' || !('Notification' in window) || !('serviceWorker' in navigator)) {
    console.warn('Browser does not support desktop notifications or service workers');
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      return false;
    }

    // Register service worker if not already registered
    const registration = await navigator.serviceWorker.register('/sw.js');
    await navigator.serviceWorker.ready;

    // Fetch VAPID public key from backend
    const response = await fetch('https://shahana-kitchen-equipment.onrender.com/api/push/vapidPublicKey');
    const vapidData = await response.json();

    if (!vapidData.publicKey) {
      console.warn('No VAPID key found from server');
      return false;
    }

    const convertedVapidKey = urlBase64ToUint8Array(vapidData.publicKey);

    // Subscribe to push service
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: convertedVapidKey
    });

    // Send subscription to backend
    await fetch('https://shahana-kitchen-equipment.onrender.com/api/push/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscription)
    });

    console.log('Push subscription successful and saved to server.');
    return true;

  } catch (err) {
    console.error('Error requesting notification permission or subscribing:', err);
    return false;
  }
};

// Helper sound alert when quote arrives
const playAlertChime = () => {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
    osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.3);
  } catch (e) {
    // Audio context may require user interaction
  }
};

// Trigger Phone Top Pop-Up Banner & Vibration Notification (WhatsApp / Instagram style)
export const showBrowserNotification = (title, body, icon = '/images/shahana-logo-new.webp') => {
  if (typeof window === 'undefined') return;

  // Play audio chime tone
  playAlertChime();

  if ('Notification' in window && Notification.permission === 'granted') {
    // Try Service Worker Push Notification first (for mobile top phone pop-up banner)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(reg => {
        reg.showNotification(title, {
          body,
          icon,
          badge: icon,
          vibrate: [250, 100, 250, 100, 250],
          tag: 'shahana-quote-notification',
          renotify: true,
          data: { url: '/admin' }
        }).catch(() => {
          // Fallback to Window Notification
          new Notification(title, { body, icon, vibrate: [200, 100, 200] });
        });
      }).catch(() => {
        new Notification(title, { body, icon, vibrate: [200, 100, 200] });
      });
    } else {
      new Notification(title, { body, icon, vibrate: [200, 100, 200] });
    }
  }
};
