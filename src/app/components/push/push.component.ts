import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";

@Component({
  selector: 'app-push',
  standalone: true,
  imports: [],
  templateUrl: './push.component.html',
  styleUrl: './push.component.css'
})
export class PushComponent {
  constructor(private swPush: SwPush,) {
  }

  ngOnInit(){
    const ctx=this
    setTimeout(function () {
      ctx.swPush.requestSubscription({
        serverPublicKey: "BLk3yO7fm5dsrd0HCtbrz40sKuZqWOcY-2jWHOoCBeZg3oCbQcN3ul3iBoHCKlgnddyjD0ywHxj9q_LXCSlGDFw"
      })
        .then(sub => {
          alert("ok")
        })
        .catch(err => alert("Could not subscribe to notifications : "+ err));
    },2000)
  }
}
