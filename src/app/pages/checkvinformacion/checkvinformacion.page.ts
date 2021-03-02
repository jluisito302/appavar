import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-checkvinformacion',
  templateUrl: './checkvinformacion.page.html',
  styleUrls: ['./checkvinformacion.page.scss'],
})
export class CheckvinformacionPage implements OnInit {

  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { 
    
  }

  ngOnInit() {
    this.arreglo$=this.verificador.getCvayer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.getCvrecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.getCvtodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.getCvayer();
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
  vehiculo(){
    this.columna='vehiculo';
  }


}
