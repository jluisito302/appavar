import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  usuarios$: Observable<any>;
  columna='name';
  textBuscar='';

  constructor(private usuarioService: UsuariosService) { 

    this.usuarios$=usuarioService.allusers();
    
  }

  ngOnInit() {
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  nombre(){
    this.columna='name';
  }

  numero(){
    this.columna='username';
  }

  tipo(){
    this.columna='tipouser';
  }

}
