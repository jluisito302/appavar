import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/usuario';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  token:any;
  API_GET='https://construavar.com/sistema/api/usuarios';
  
  constructor(private httpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  allusers(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_GET + '/mostrar/KOdNMTDnhFUrlLAJe', {headers});
  }

  edituser(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<Usuario>(this.API_GET + '/editaruser/'+ id, {headers});
  }

  updateUser(usuario: Usuario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return  this.httpClient.put(this.API_GET + '/updateuser/' + usuario.id, usuario, {headers});
  }

  addUser(usuario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return  this.httpClient.post(this.API_GET + '/adduser', usuario, {headers});
  }


}
