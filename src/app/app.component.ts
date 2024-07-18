import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'webPush';

  constructor() {

  }

  public sendNotification(title: string, body: string) {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification(title, {
          body: body,
          icon: 'public/favicon.ico'
        });
      });
    } else {
      alert("no")
    }
  }
}
