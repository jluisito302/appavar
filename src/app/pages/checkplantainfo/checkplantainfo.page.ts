import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkplantainfo',
  templateUrl: './checkplantainfo.page.html',
  styleUrls: ['./checkplantainfo.page.scss'],
})
export class CheckplantainfoPage implements OnInit {
  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { }

  ngOnInit() {
    this.arreglo$=this.verificador.getCvayer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.getCplantaRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.getCplantatodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.getCplantaAyer();
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
    this.columna='planta_concreto';
  }


}//FINAL DE LA CLASE