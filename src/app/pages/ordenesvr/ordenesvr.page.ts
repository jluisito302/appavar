import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { RcheckvService } from '../../services/rcheckv.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-ordenesvr',
  templateUrl: './ordenesvr.page.html',
  styleUrls: ['./ordenesvr.page.scss'],
})
export class OrdenesvrPage implements OnInit {

  allot: {};
  dato$:Observable<any>;
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';

  constructor(private rcheckservice: RcheckvService, private authService: AuthService) { 
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.rcheckservice.otrecientes(this.usuario['username']).subscribe(
          data=> {
            this.allot=data;
            this.dato$ = this.rcheckservice.otrecientes(this.usuario['username']);
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
