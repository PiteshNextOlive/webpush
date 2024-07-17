import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor() { }
  public sendNotification(title: string, body: string) {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(function(registration) {

        registration.showNotification("Test notificatiojm", {
          body: "Content gioews here",
          icon: 'assets/icons/icon-512x512.png',
          // @ts-ignore
          vibrate: [100, 50, 100],
          data: { dateOfArrival: Date.now() },
          actions: [
            { action: 'explore', title: 'Go to the site' },
            { action: 'close', title: 'Close the notification' }
          ]
        });
      });
    }else {
      if (!('serviceWorker' in navigator)) {
        console.warn('Service Worker is not supported in this browser.');
      }

      if (!('PushManager' in window)) {
        console.warn('Push Notifications are not supported in this browser.');
      }
    }
  }
}
