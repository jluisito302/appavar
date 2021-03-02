import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activvehiinfo',
  templateUrl: './activvehiinfo.page.html',
  styleUrls: ['./activvehiinfo.page.scss'],
})
export class ActivvehiinfoPage implements OnInit {
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
      this.arreglo$=this.verificador.activVehiRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.actVehiTodos();
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
  vehiculo(){
    this.columna='vehiculo';
  }


}
