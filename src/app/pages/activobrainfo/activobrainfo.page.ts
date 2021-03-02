import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activobrainfo',
  templateUrl: './activobrainfo.page.html',
  styleUrls: ['./activobrainfo.page.scss'],
})
export class ActivobrainfoPage implements OnInit {
  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { }

  ngOnInit() {
    this.arreglo$=this.verificador.activObrasAyer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.activObrasRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.activObrasTodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.activObrasAyer();
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
  obra(){
    this.columna='nombre_obra';
  }

}
