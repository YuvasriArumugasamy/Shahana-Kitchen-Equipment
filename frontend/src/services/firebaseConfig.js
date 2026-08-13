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
