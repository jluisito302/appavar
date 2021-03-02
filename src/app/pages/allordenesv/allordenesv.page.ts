import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { RcheckvService } from '../../services/rcheckv.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-allordenesv',
  templateUrl: './allordenesv.page.html',
  styleUrls: ['./allordenesv.page.scss'],
})
export class AllordenesvPage implements OnInit {

  allot: {};
  dato$:Observable<any>;
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';


  constructor(private rcheckservice: RcheckvService, private authService: AuthService) {
    /*
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.rcheckservice.allot(this.usuario['username']).subscribe(
          data=> {
            this.allot=data;
            this.dato$ = this.rcheckservice.allot(this.usuario['username']);
          }, error => {
            alert('Error');
            console.log(error);
          });
      }
    );
      */
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.rcheckservice.otrecientes(this.usuario['username']);
      }
    );
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  folio(){
    this.columna='folio';
  }
  fecha(){
    this.columna='fecha';
  }
  vehiculo(){
    this.columna='vehiculo';
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.rcheckservice.otrecientes(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.rcheckservice.allot(this.usuario['username']);
        }
      );
    }
  }

}
