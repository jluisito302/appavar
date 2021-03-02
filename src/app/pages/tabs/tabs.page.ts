import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  usuario={};
  constructor(private authService: AuthService,  private router: Router, private storage:NativeStorage){
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
      }
    );
  }

  ngOnInit() {
    /*
    this.storage.getItem("usuario").then((val)=>{
      this.usuario=JSON.parse(val);
    });*/
    
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        if (this.usuario['estatus'] != 'Alta') {
          this.router.navigate(['/estatusbaja']);
        }
      }
    );
  }

}
