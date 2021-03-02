import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.page.html',
  styleUrls: ['./herramientas.page.scss'],
})
export class HerramientasPage implements OnInit {
  array:Observable<any>;
  eleccion='';
  textBuscar='';
  columna='nombre';

  constructor(private departamento:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamento.herraminetasApi();
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  articulo(){
    this.columna='nombre';
  }
  tipo(){
    this.columna='h_tipo';
  }
  stock(){
    this.columna='cantidad_stock';
  }

}
