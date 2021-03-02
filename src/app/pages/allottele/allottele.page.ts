import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { ManipuladorService } from '../../services/manipulador.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-allottele',
  templateUrl: './allottele.page.html',
  styleUrls: ['./allottele.page.scss'],
})
export class AllottelePage implements OnInit {
  allchecks: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor(private manipService: ManipuladorService, private authService:AuthService) { 
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.manipService.allot(this.usuario['username']).subscribe(
          data=> {
            this.allchecks=data;
            this.dato$=this.manipService.allot(this.usuario['username']);
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
  tele(){
    this.columna='manipulador';
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.manipService.otRecientes(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.manipService.allot(this.usuario['username']);
        }
      );
    }
  }

}
