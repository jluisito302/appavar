import { Component, OnInit } from '@angular/core';

// IMPORTADOS
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { Usuario } from '../../interfaces/usuario';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user: User;

  usuario={};

  constructor(private menu: MenuController, private authService: AuthService, 
              private storage: NativeStorage, private router: Router, ){
    this.menu.enable(true);
    
    this.authService.user().subscribe(
      user => {
        this.usuario=user;
        if (this.usuario['estatus'] != 'Alta') {
          this.router.navigate(['/estatusbaja']);
        }
      }
    );
    
  }

  ngOnInit() {
    
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        if (this.usuario['estatus'] != 'Alta') {
          this.router.navigate(['/estatusbaja']);
        }
      }
    );
  }
  /*
  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        if (this.usuario['estatus'] != 'Alta') {
          this.router.navigate(['/estatusbaja']);
        }
      }
    );
  }*/

  doRefresh(event){
    
    setTimeout(()=>{
      this.authService.user().subscribe(
        user=> {
          this.usuario = user;
          
        }
      );
      event.target.complete();
    }, 1500);
  }

}
