import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtAlbanileria } from '../interfaces/otalbanileria';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ObraService {
  API_GET = 'https://construavar.com/sistema/api/otobra';
  token:any;
  constructor(private httpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }
  //OBTENEMOS DEL SERVIDOR TODOS LOS EMPLEADOS
  getPersonal(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_GET + '/personal', {headers});
  }
  //OBTENEMOS DEL SERVIDOR LOS MATERIALES DEL ALMACEN
  getMateriales(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_GET + '/materiales', {headers});
  }

  //obtenemos del servidor las maquinarias ligeras
  getMaquinaria(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_GET + '/maquinaria', {headers});
  }
  getEquipos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_GET + '/equipos', {headers});
  }
  //OBTENEMOS DEL SERVIDOR LAS OBRAS
  getObras(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_GET + '/obras', {headers});
  }

  guardar(otalba: OtAlbanileria){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_GET + '/guardar', otalba, {headers});
  }

  editar(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<OtAlbanileria>(this.API_GET + '/editar/'+id, {headers});
  }

  allot(nume){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<OtAlbanileria>(this.API_GET + '/allot/'+nume, {headers});
  }

  updateOt(check){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_GET+'/updateot/'+ check.id, check, {headers});
  }
  
  otrecientes(nume){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<OtAlbanileria>(this.API_GET + '/otrecientes/'+nume, {headers});
  }

  uploadimage(image){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_GET + '/uploadimage', image, {headers});
  }

  

}//
