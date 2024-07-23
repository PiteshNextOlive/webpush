import { Component } from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {NotifService} from "../../services/NotifService/notif.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-push',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './push.component.html',
  styleUrl: './push.component.css'
})
export class PushComponent {
  constructor(private swPush: SwPush,protected ns:NotifService) {
  }

  formData=new FormGroup({
    title:new FormControl(""),
    body:new FormControl(""),
    image:new FormControl(""),
  })

  ngOnInit(){

    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        // alert('Notification permission OK.');
      } else {
        alert('Notification permission denied.');
      }
    });

  }

  sendNotif() {
    this.ns.sendNotification(this.formData.value.title??'',this.formData.value.body??'',this.formData.value.image??'')
  }
}
