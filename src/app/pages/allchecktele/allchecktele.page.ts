import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { ManipuladorService } from '../../services/manipulador.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-allchecktele',
  templateUrl: './allchecktele.page.html',
  styleUrls: ['./allchecktele.page.scss'],
})
export class AllchecktelePage implements OnInit {
  allchecks: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor(private manipService: ManipuladorService,  private authService: AuthService) { 
    /*
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.manipService.allCheck(this.usuario['username']).subscribe(
          data=> {
            this.allchecks=data;
            this.dato$ = this.manipService.allCheck(this.usuario['username']);
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
        this.dato$=this.manipService.checkRecientes(this.usuario['username']);
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
  tele(){
    this.columna='manipulador';
  }


  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.manipService.checkRecientes(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.manipService.allCheck(this.usuario['username']);
        }
      );
    }
  }



}
