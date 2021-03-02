import { Component, OnInit } from '@angular/core';

//IMPORTAR EL SERVICIO
import { RcheckvService } from '../../services/rcheckv.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-allcheckv',
  templateUrl: './allcheckv.page.html',
  styleUrls: ['./allcheckv.page.scss'],
})
export class AllcheckvPage implements OnInit {

  eleccion='';

  allchecks: {};
  dato$:Observable<any>;
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';
  //datos$: {};

  constructor(private rcheckservice: RcheckvService, private authService: AuthService) { 
    /*
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.rcheckservice.showcheck(this.usuario['username']).subscribe(
          (data: Observable<any>)=> {
            this.dato$=data;
          }, error => {
            alert('Error');
            console.log(error);
          });
      }
    );*/
    
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.rcheckservice.ultcheck(this.usuario['username']);
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
          this.dato$=this.rcheckservice.ultcheck(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.rcheckservice.showcheck(this.usuario['username']);
        }
      );
    }
  }


}//FIN DE LA CLASE
