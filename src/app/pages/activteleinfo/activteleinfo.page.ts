import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activteleinfo',
  templateUrl: './activteleinfo.page.html',
  styleUrls: ['./activteleinfo.page.scss'],
})
export class ActivteleinfoPage implements OnInit {
  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { }

  ngOnInit() {
    this.arreglo$=this.verificador.activVehiAyer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.activTeleRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.activTeleTodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.activVehiAyer();
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
  tele(){
    this.columna='manipulador';
  }

}
