import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-ultcheckr',
  templateUrl: './ultcheckr.page.html',
  styleUrls: ['./ultcheckr.page.scss'],
})
export class UltcheckrPage implements OnInit {
  allchecks: {};
  dato$:Observable<any>;
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';

  constructor( private retroservice: RetroService,  private authService: AuthService) { 
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.retroservice.recientescheck(this.usuario['username']).subscribe(
          data=> {
            this.allchecks=data;
            this.dato$ = this.retroservice.recientescheck(this.usuario['username']);
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
  retro(){
    this.columna='retroexcavadora';
  }

}
