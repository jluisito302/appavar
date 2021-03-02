import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mantenimiento } from '../interfaces/mantenimiento';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MttoserviceService {
  API_URL = 'https://construavar.com/sistema/api/mtto';
  token:any;
  constructor(private httpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  equipos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_URL + '/equipos', {headers});
  }

  insumos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_URL + '/insumos', {headers});
  }

  guardar(mtto: Mantenimiento){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_URL + '/insertar', mtto, {headers});
  }

  recientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_URL + '/recientes', {headers});
  }

  editar(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get<Mantenimiento>(this.API_URL + '/editar/'+ id, {headers});
  }

  update(mantto){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_URL + '/actualizar/'+ mantto.id, mantto, {headers});
  }

  todos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_URL + '/todos', {headers});
  }



}
