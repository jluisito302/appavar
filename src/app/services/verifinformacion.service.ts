import { Injectable } from '@angular/core';
//IMPORTAR LA INTERFACE
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class VerifinformacionService {
  token:any;
  constructor(private httpClient: HttpClient, private auth:AuthService) { 
    this.token=auth.getToken();
  }

  API_ENDPOINT = 'https://construavar.com/sistema/api/verificador';

  getCvayer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cvayer', {headers});
  }

  getCvrecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cvrecientes', {headers});
  }
  
  getCvtodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cvtodos', {headers});
  }

  getValidarCV(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validocv/'+id, {headers});
  }

  getCretroayer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cretroayer', {headers});
  }

  getCretrorecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cretrorecientes', {headers});
  }
   
  getCretrotodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cretrotodos', {headers});
  }

  getValidarCRetro(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validocretro/'+id, {headers});
  }
  //RUTAS PARA PLANTA
  getCplantaAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cplantaayer', {headers});
  }
  getCplantaRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cplantarecientes', {headers});
  }

  getCplantatodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cplantatodos', {headers});
  }
  //avalidar planta
  validarCheckPlanta(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validocplanta/'+id, {headers});
  }

  //RUTAS PARA MANPULADOR TELEHANDLER
  getCTeleAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cteleayer', {headers});
  }
  getCTeleRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/ctelerecientes', {headers});
  }

  getCTeleTodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/cteletodos', {headers});
  }
  
  validarCheckTele(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validoctele/'+id, {headers});
  }

  //ACTIVIDADES 
  //ACTIVIDADES VEHICULOS
  activVehiAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activayervehiculos', {headers});
  }
  activVehiRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activrecvehi', {headers});
  }
  actVehiTodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activtodosvehi', {headers});
  }
  validarOtVehi(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validootvehi/'+id, {headers});
  }
  //RETRO ACTIVIDADES
  activRetroAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activayerretro', {headers});
  }

  activRetroRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activrecretro', {headers});
  }

  activRetroTodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activtodosretro', {headers});
  }

  validarOtRetro(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validootretro/'+id, {headers});
  }

  //METODS DE ACTIVIDADES DE TELEHANDLER
  activTeleAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activayertele', {headers});
  }
  
  activTeleRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activrectele', {headers});
  }

  activTeleTodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activtodostele', {headers});
  }

  validarOtTele(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validoottele/'+id, {headers});
  }

  //METODS DE ACTIVIDADES DE PLANTA
  activPlantaAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activayerplanta', {headers});
  }
  
  activPlantaRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activrecplanta', {headers});
  }

  activPlantaTodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activtodosplanta', {headers});
  }

  validarOtPlanta(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validootplanta/'+id, {headers});
  }

  //METODS DE ACTIVIDADES DE OBRAS
  activObrasAyer(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activayerobra', {headers});
  }
  
  activObrasRecientes(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activrecobra', {headers});
  }

  activObrasTodos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/activtodosobra', {headers});
  }

  validarOtObras(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.API_ENDPOINT+'/validootobra/'+id, {headers});
  }
  



  
  




}//