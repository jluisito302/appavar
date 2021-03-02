import { Injectable } from '@angular/core';
//IMPORTAR LA INTERFACE
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Checkretro } from '../interfaces/checkretro';
import { OtRetro } from '../interfaces/otretro';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RetroService {
  token:any;

  API_ENDPOINT = 'https://construavar.com/sistema/api/checkretro';
  API_OT='https://construavar.com/sistema/api/otretro';

  constructor(private HttpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  getRetros(){
    return this.HttpClient.get(this.API_ENDPOINT+'/allretros');
  }

  savecheck(checkretro: Checkretro){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/regcheck', checkretro);
  }

  allcheck(numt){
     const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/allcheck/' + numt);
  }

  recientescheck(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
   return this.HttpClient.get(this.API_ENDPOINT + '/recientescheck/' + numt);
  }

  editcheck(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT+'/editcheck/'+ id);
  }

  updatecheck(check){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.put(this.API_ENDPOINT+'/updatecheck/'+ check.id, check);
  }

  saveOT(otretro: OtRetro){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_OT + '/regot', otretro);
  }

  allot(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_OT + '/allot/' + numt);
  }

  recientot(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_OT + '/recientesot/' + numt);
  }

  editot(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_OT+'/editot/'+ id);
  }

  updateot(ot){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.put(this.API_OT+'/updateot/'+ ot.id, ot);
  }


  



}