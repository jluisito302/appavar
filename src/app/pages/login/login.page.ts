import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { Platform } from '@ionic/angular';

import { ModalController, NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User={
    username: null,
    password: null,
    rememberme: null,
  }

  usuario:{};
  isLoggedIn = false;

  check = {
    passwordCheckbox: null
  }

  token:any;
  inicio:number;
  
  subscribe:any;
  constructor(
    private modalController: ModalController, private authService: AuthService,
    private navCtrl: NavController, private alertService: AlertService, public platform:Platform,
    private router:Router, private storage: NativeStorage
    ) { 
      this.token=this.authService.getToken();
      
      if (this.token != null) {
          this.router.navigate(['/tabs/menu']);
      }

      
      /*
      this.platform.backButton.subscribeWithPriority(10, () => {
        navigator["app"].exitApp();
      });*/
    }
 
  ngOnInit() {
    
  }  

  showPassword(input: any): any {
    input.type = input.type === 'password' ?  'text' : 'password';
  }

  login(form: NgForm) {
    this.authService.login(form.value.username, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Acceso Correcto");
      },
      error => {
        console.log(error);
        this.alertService.error("Acceso Incorrecto");
      },
      () => {
        this.navCtrl.navigateRoot('/tabs/menu');
      }
    );
  }

}
