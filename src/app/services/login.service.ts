import { Injectable } from '@angular/core';
import { User } from './../interfaces/user';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient: HttpClient) { }

  API_ENDPOINT = 'https://construavar.com/sistema/api/';
  ASISTENCIAS = 'https://construavar.com/sistema/api/asistencias';

  auth(user: User){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + 'auth/login', user, {headers});
  }

  asistencia(usuario){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.ASISTENCIAS + '/apiasistencia', usuario,{headers});
  }
}
