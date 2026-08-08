// Service Worker for Shahana Kitchen Equipment Web Push Notifications

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle Background Push Event
self.addEventListener('push', (event) => {
  let data = { title: 'Shahana Kitchen Equipment', body: 'புதிய வாடிக்கையாளர் விலை கோரிக்கை வந்துள்ளது!' };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body || data.desc || 'New quote request received',
    icon: '/favicon.ico',
    badge: '/favicon.ico',
    vibrate: [200, 100, 200, 100, 200],
    data: { url: '/admin' },
    actions: [
      { action: 'open', title: 'View Quote 📋' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'New Quote Alert 🔔', options)
  );
});

// Notification Click Handler
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/admin');
    })
  );
});
