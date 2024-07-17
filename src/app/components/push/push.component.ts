import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {NotifService} from "../../services/NotifService/notif.service";

@Component({
  selector: 'app-push',
  standalone: true,
  imports: [],
  templateUrl: './push.component.html',
  styleUrl: './push.component.css'
})
export class PushComponent {
  constructor(private swPush: SwPush,protected ns:NotifService) {
  }

  ngOnInit(){
    const ctx=this
    setTimeout(function () {
      // ctx.ns.sendNotification("Ok","test")
    },2000)
  }
}
