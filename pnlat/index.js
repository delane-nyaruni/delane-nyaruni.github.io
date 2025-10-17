// Register the Service Worker
const registerSW = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/pnlat/serviceWorker.js');
      console.log('[App] SW registered:', registration.scope);
    } catch (err) {
      console.error('[App] SW registration failed:', err);
    }
  } else {
    console.warn('[App] Service workers are not supported in this browser.');
  }
};

// Check Notification API support
const checkAPIPermission = () => {
  if (!('Notification' in window)) {
    console.warn('[App] Notifications are not supported in this browser.');
    return false;
  }
  return true;
};

// Request permission for notifications
const reqNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification('PNLAT: Notifications enabled.');
    } else {
      console.warn('[App] Notification permission denied or dismissed.');
    }
  } catch (err) {
    console.error('[App] Failed to request notification permission:', err);
  }
};

// Init
(async () => {
  if (checkAPIPermission()) {
    await registerSW();
    await reqNotificationPermission();
  } else {
    // Optional: fallback if notifications are not supported
    await registerSW();
  }
})();
