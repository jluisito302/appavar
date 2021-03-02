import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { ManipuladorService } from '../../services/manipulador.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-ultchecktele',
  templateUrl: './ultchecktele.page.html',
  styleUrls: ['./ultchecktele.page.scss'],
})
export class UltchecktelePage implements OnInit {
  allchecks: {};
  dato$:Observable<any>;
  user: User;
  usuario: {};
  textBuscar='';
  columna='folio';

  constructor(private manipService: ManipuladorService,  private authService: AuthService) { 
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.manipService.checkRecientes(this.usuario['username']).subscribe(
          data=> {
            this.allchecks=data;
            this.dato$ = this.manipService.checkRecientes(this.usuario['username']);
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

}
