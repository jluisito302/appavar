import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-allotretro',
  templateUrl: './allotretro.page.html',
  styleUrls: ['./allotretro.page.scss'],
})
export class AllotretroPage implements OnInit {

  allchecks: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor(private retroservice: RetroService,  private authService: AuthService) { 
    
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.retroservice.recientot(this.usuario['username']);
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
          this.dato$=this.retroservice.recientot(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.retroservice.allot(this.usuario['username']);
        }
      );
    }
  }


}
