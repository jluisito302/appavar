import { Injectable } from '@angular/core';
//IMPORTAR LA INTERFACE
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Checkvehiculos } from '../interfaces/checkvehiculos';
//IMPORTAR LA INTERFACE
import { OtVehiculos } from '../interfaces/otvehiculos';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RcheckvService {

  token:any;
  API_ENDPOINT = 'https://construavar.com/sistema/api/checkvehiculos';
  API_ROUTE = 'https://construavar.com/sistema/api/ordenvehiculos';

  constructor(private HttpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  getVehiculos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/allvehi', {headers});
  }

  saveCheck(checkv: Checkvehiculos){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/rcheckv', checkv, {headers});
  }

  showcheck(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT+'/allcheckv/'+numt, {headers});
  }

  editcheck(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get<Checkvehiculos>(this.API_ENDPOINT+'/editcheck/'+id, {headers});
  }

  ultcheck(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT+'/ultcheck/'+numt, {headers});
  }

  update(check){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.put(this.API_ENDPOINT+'/updatecheck/'+check.id, check, {headers});
  }
  //INSERTAR ORDEN DE TRABAJO
  insertorden(ot: OtVehiculos){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ROUTE + '/rordenv', ot, {headers});
  }

  allot(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ROUTE+'/allotv/'+numt, {headers});
  }

  otrecientes(numt){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ROUTE+'/otrecientes/'+numt, {headers});
  }

  editot(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ROUTE+'/editot/'+id, {headers});
  }

  updateot(ot){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.put(this.API_ROUTE+'/updateot/'+ot.id, ot, {headers});
  }

  


  
}//fin de la clase
