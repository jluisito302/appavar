import { Injectable } from '@angular/core';
//IMPORTAR LA INTERFACE
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CheckPlanta } from '../interfaces/checkplanta';
import { OtPlanta } from '../interfaces/otplanta';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PlantaconcretoService {
  API_CHECK = 'https://construavar.com/sistema/api/checkplanta';
  API_OT='https://construavar.com/sistema/api/otplanta';

  token:any;

  constructor(private HttpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  getPlantas(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_CHECK+'/allplanta', {headers});
  }
  //RUTAS DE SERVICIOS PARA CHECK LIST
  savecheck(checkplanta: CheckPlanta){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_CHECK + '/savecheck', checkplanta, {headers});
  }

  allcheck(numt){
     const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_CHECK + '/allcheck/' + numt, {headers});
  }

  recientescheck(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
   return this.HttpClient.get(this.API_CHECK + '/checkrecientes/' + numt, {headers});
  }

  editcheck(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_CHECK+'/editcheck/'+ id, {headers});
  }

  updatecheck(check){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.put(this.API_CHECK+'/updatecheck/'+ check.id, check, {headers});
  }

  //RUTAS PARA OT DE PLANTA
  saveOT(otManip: OtPlanta){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_OT + '/saveot', otManip);
  }

  allot(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_OT + '/allot/' + numt, {headers});
  }

  otRecientes(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_OT + '/recientesot/' + numt, {headers});
  }

  editOt(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_OT+'/editot/'+ id, {headers});
  }

  updateOt(ot){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.put(this.API_OT+'/updateot/'+ ot.id, ot ,{headers});
  }


}
