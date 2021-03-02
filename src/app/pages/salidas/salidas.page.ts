import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss'],
})
export class SalidasPage implements OnInit {
  array:Observable<any>;
  eleccion='';
  textBuscar='';
  columna='articulo';

  constructor(private departamento:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamento.salidasArticulos();
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  articulo(){
    this.columna='articulo';
  }
  categoria(){
    this.columna='rubro_articulo';
  }
  destino(){
    this.columna='destino';
  }




}
