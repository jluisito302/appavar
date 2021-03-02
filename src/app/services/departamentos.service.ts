import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  token:any;
  API_ENDPOINT = 'https://construavar.com/sistema/api/gerente';

  constructor(private HttpClient: HttpClient) { 
  }

  

  hnominasguardadas(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/hnominasguardadas', {headers: headers});
  }

  buscarnomina(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/buscarnomina/'+id, {headers: headers});
  }

  histabonos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/historialabonos', {headers: headers});
  }

  bienHbonos(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienhbonos/'+id, {headers: headers});
  }

  moviliario(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/moviliarioapi', {headers: headers});
  }

  bienMoviliario(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienmoviliario/'+id, {headers: headers});
  }

  verproveedores(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apiproveedores', {headers: headers});
  }

  provcreditos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apiprovcreditos', {headers: headers});
  }

  saveAbonos(model){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.post(this.API_ENDPOINT + '/saveabonos', model , {headers: headers});
  }

  showcobros(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/showcobros', {headers: headers});
  }

  bienCobos(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienapicobros/'+id, {headers: headers});
  }

  showRentapesada(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/rentampesada', {headers: headers});
  }

  bienRentaPesada(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienrentapesada/'+id, {headers: headers});
  }

  showRentLigera(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/rentmligera', {headers: headers});
  }

  showEmpleados(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/showempleados', {headers: headers});
  }
  
  antigEmpleados(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apiantigempleados', {headers: headers});
  }

  vermttos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/vermttosapi', {headers: headers});
  }

  verregcostos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/verregcostos', {headers: headers});
  }

  bienregcostos(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienregcostos/'+id, {headers: headers});
  }

  equipos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/equiposapi', {headers: headers});
  }

  mttoTExternos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/mttosexternosapi', {headers: headers});
  }

  buscarmtExterno(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/buscarmtexterno/'+id, {headers: headers});
  }

  sumarmtexterno(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/sumarmtexterno/'+id, {headers: headers});
  }

  bienMttExternos(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienmttoexternos/'+id, {headers: headers});
  }

  stockarticulos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/stockarticulos', {headers: headers});
  }

  entradaArticulos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/entradaartapi', {headers: headers});
  }

  salidasArticulos(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/salidasartapi', {headers: headers});
  }

  herraminetasApi(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/herramientasapi', {headers: headers});
  }

  herraPrestadas(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/herrprestadasapi', {headers: headers});
  }

  verHPrestada(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/apiverhprestada/'+id, {headers: headers});
  }

  maquinariaLigera(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/mligareaapi', {headers: headers});
  }

  cotizacionesApi(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/cotizacioneapi', {headers: headers});
  }

  bienCotizaciones(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/biencotizacioneapi/'+id, {headers: headers});
  }

  obrasProceso(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/obrasprocesoapi', {headers: headers});
  }

  obrasTerminadas(){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/obrasterminadasapi', {headers: headers});
  }

  bienObras(id){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.HttpClient.get(this.API_ENDPOINT + '/bienobrasapi/'+id, {headers: headers});
  }


}
