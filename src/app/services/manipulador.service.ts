import { Injectable } from '@angular/core';
import { CheckManip } from '../interfaces/checkmanip';
import { OtManipulador } from '../interfaces/otmanip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ManipuladorService {
  token:any;
  API_CHECK = 'https://construavar.com/sistema/api/checkmanip';
  API_OT ='https://construavar.com/sistema/api/otmanip';

  constructor(private httpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }


  allmanip(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_CHECK + '/allmanip', {headers});
  }

  saveCheck(checkmani: CheckManip){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_CHECK + '/savecheck', checkmani);
  }

  allCheck(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_CHECK + '/allcheck/' + numt);
  }

  checkRecientes(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_CHECK + '/checkrecientes/' + numt);
  }

  editCheck(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_CHECK+'/editcheck/'+ id, {headers});
  }

  updatecheck(check){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_CHECK+'/updatecheck/'+ check.id, check);
  }

  saveOT(otManip: OtManipulador){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.API_OT + '/saveot', otManip);
  }

  allot(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_OT + '/allot/' + numt, {headers});
  }

  otRecientes(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_OT + '/recientesot/' + numt, {headers});
  }

  editOt(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_OT+'/editot/'+ id, {headers});
  }

  updateOt(ot){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.API_OT+'/updateot/'+ ot.id, ot);
  }
  



}