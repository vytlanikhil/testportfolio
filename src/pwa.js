export function registerPWA() {
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => {
          console.log('ServiceWorker registered successfully on scope:', reg.scope);
        })
        .catch((err) => {
          console.warn('ServiceWorker registration failed:', err);
        });
    });
  }
}
