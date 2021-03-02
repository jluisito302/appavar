import { Component, OnInit } from '@angular/core';
//IMPORTAR LOS SERVICIOS 
import { RcheckvService } from '../../services/rcheckv.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-ultcheckv',
  templateUrl: './ultcheckv.page.html',
  styleUrls: ['./ultcheckv.page.scss'],
})
export class UltcheckvPage implements OnInit {

  ultchecks: {};
  dato$:Observable<any>;
  //lista$:Observable = Observable.of(allcheck);
  //inicializamos los users
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';

  constructor(private rcheckservice: RcheckvService, private authService: AuthService) { 
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.rcheckservice.ultcheck(this.usuario['username']).subscribe(
          data=> {
            this.ultchecks=data;
            this.dato$ = this.rcheckservice.ultcheck(this.usuario['username']);
          }, error => {
            alert('Error');
            console.log(error);
          });
      }
    );
  }

  ngOnInit() {
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

}
