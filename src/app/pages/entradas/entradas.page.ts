import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  array:Observable<any>;
  eleccion='';
  textBuscar='';
  columna='articulo';

  constructor(private departamento:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamento.entradaArticulos();
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  articulo(){
    this.columna='articulo';
  }
  categoria(){
    this.columna='rubro';
  }

}
