import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor() { }
  public sendNotification(title: string, body: string) {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(function(registration) {

        registration.showNotification(title, {
          body: body,
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
      alert("9sud9fsd")
    }
  }
}
