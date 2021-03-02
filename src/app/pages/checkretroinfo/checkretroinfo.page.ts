import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkretroinfo',
  templateUrl: './checkretroinfo.page.html',
  styleUrls: ['./checkretroinfo.page.scss'],
})
export class CheckretroinfoPage implements OnInit {
  columna='folio';
  textBuscar='';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { }

  ngOnInit() {
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.getCretrorecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.getCretrotodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.getCretroayer();
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
  retro(){
    this.columna='retroexcavadora';
  }


}
