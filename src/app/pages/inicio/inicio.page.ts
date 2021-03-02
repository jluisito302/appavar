import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  token:any;
  isLoggedIn = false;
  constructor(private authService: AuthService, private alertService: AlertService,
    private router:Router, private storage: NativeStorage) { 
    this.storage.getItem('token').then(
      data => {
        this.token = data;
        console.log(data);
        if(this.token != null) {
          this.isLoggedIn=true;
          this.router.navigate(['/tabs/menu']);
        } else {
          this.isLoggedIn=false;
          this.router.navigate(['/login']);
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
        this.router.navigate(['/login']);
      }
    );
  }

  ngOnInit() {
  }

}
