import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-allcheckr',
  templateUrl: './allcheckr.page.html',
  styleUrls: ['./allcheckr.page.scss'],
})
export class AllcheckrPage implements OnInit {

  allchecks: {};
  dato$:Observable<any>;
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor( private retroservice: RetroService,  private authService: AuthService) { 
    
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.retroservice.allcheck(this.usuario['username']);
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
  retro(){
    this.columna='retroexcavadora';
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.retroservice.recientescheck(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.retroservice.allcheck(this.usuario['username']);
        }
      );
    }
  }

}
