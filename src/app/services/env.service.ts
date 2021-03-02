import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'https://construavar.com/sistema/api/';
  
  constructor() { }
}
