import { Component, OnInit } from '@angular/core';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-activretroinfo',
  templateUrl: './activretroinfo.page.html',
  styleUrls: ['./activretroinfo.page.scss'],
})
export class ActivretroinfoPage implements OnInit {
  textBuscar='';
  columna='folio';
  eleccion='';
  arreglo$: Observable <any>;

  constructor(private verificador: VerifinformacionService) { }

  ngOnInit() {
    this.arreglo$=this.verificador.activRetroAyer();
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.arreglo$=this.verificador.activRetroRecientes();
    }
    if(this.eleccion == 'todos'){
      this.arreglo$=this.verificador.activRetroTodos();
    }
    if(this.eleccion == 'ayer'){
      this.arreglo$=this.verificador.activRetroAyer();
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
