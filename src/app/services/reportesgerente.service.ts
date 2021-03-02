import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class ReportesgerenteService {
  API_ENDPOINT = 'https://construavar.com/sistema/api/gerente';
  token:any;
  
  constructor(private HttpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  getcostosObras(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apicostobras', {headers});
  }

  cfechasfechas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/apicostfechafecha', model);
  }

  estatuscreditos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apiestcreditos', {headers});
  }

  getProvedores(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/getproveedores', {headers});
  }

  buscarabonos(model2){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/buscarabonos', model2);
  }

  nominasporfechas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/apinomporfechas', model);
  }

  getSemanas(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/getsemanas', {headers});
  }

  nominaspsemanas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/apinomsemanas', model);
  }

  listasporfechas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/apilistporfechas', model);
  }

  listaspsemanas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/apilistsemanas', model);
  }

  mttocostgeneral(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/costgeneralesmtto', {headers});
  }

  costosmttofechas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/costosmttofechas', model);
  }

  dieselcongeneral(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/dieselconsgeneral', {headers});
  }

  costdieselfechas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/consdieselfechas', model);
  }

  inversionobras(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apiinsersionobras', {headers});
  }

  costRubFechas(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/costrubfechas', model);
  }

  cObrasDetall(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/cobrasdetallados/'+id+'/GDtqKsW9xd6b', {headers});
  }

  obraid(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/obra/'+id+'/GDtqKsW9xd6b', {headers});
  }


}