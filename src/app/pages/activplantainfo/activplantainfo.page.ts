import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activplantainfo',
  templateUrl: './activplantainfo.page.html',
  styleUrls: ['./activplantainfo.page.scss'],
})
export class ActivplantainfoPage implements OnInit {
  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { }

  ngOnInit() {
    this.arreglo$=this.verificador.activPlantaAyer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.activPlantaRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.activPlantaTodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.activPlantaAyer();
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
    this.columna='camion';
  }

}
