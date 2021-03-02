import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-estatusbaja',
  templateUrl: './estatusbaja.page.html',
  styleUrls: ['./estatusbaja.page.scss'],
})
export class EstatusbajaPage implements OnInit {
  subscribe:any;
  constructor(public platform:Platform) { 
    this.subscribe = this.platform.backButton.subscribeWithPriority(10, ()=>{
      if (this.constructor.name == "EstatusbajaPage") {
        navigator["app"].exitApp();
      }
    });
  }

  ngOnInit() {
  }

}
