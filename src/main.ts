import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
declare var OneSignalDeferred:any

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/ngsw-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
} else {
  console.warn('Service Worker is not supported in this browser.');
}
// @ts-ignore
window.OneSignalDeferred = window.OneSignalDeferred || [];
OneSignalDeferred.push(async function(OneSignal:any) {
  await OneSignal.init({
    appId: "f32aa77f-4752-4136-91ad-c59bd3ad337e",
  });
});
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
