import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkteleinfo',
  templateUrl: './checkteleinfo.page.html',
  styleUrls: ['./checkteleinfo.page.scss'],
})
export class CheckteleinfoPage implements OnInit {
  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { 


  }

  ngOnInit() {
    this.arreglo$=this.verificador.getCTeleAyer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.getCTeleRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.getCTeleTodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.getCTeleAyer();
    }
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  folio(){
    this.columna='folio';
  }
  fecha(){
    this.columna='fecha';
  }
  planta(){
    this.columna='manipulador';
  }




}// fin de la clase
