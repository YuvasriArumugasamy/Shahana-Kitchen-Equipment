// Service Worker for Shahana Kitchen Equipment Web Push Notifications

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle Background Push Event
self.addEventListener('push', (event) => {
  let data = { title: 'Shahana Kitchen Equipment', body: 'புதிய வாடிக்கையாளர் விலை கோரிக்கை வந்துள்ளது!', url: '/admin' };
  
  if (event.data) {
    try {
      const payload = event.data.json();
      data = { ...data, ...payload };
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: '/images/shahana-logo-new.webp',
    badge: '/images/shahana-logo-new.webp',
    vibrate: [200, 100, 200, 100, 200],
    data: { url: data.url || '/admin' },
    actions: [
      { action: 'open', title: 'View Quote 📋' }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
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
