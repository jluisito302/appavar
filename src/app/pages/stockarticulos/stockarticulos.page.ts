import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stockarticulos',
  templateUrl: './stockarticulos.page.html',
  styleUrls: ['./stockarticulos.page.scss'],
})
export class StockarticulosPage implements OnInit {
  array:Observable<any>;
  eleccion='';
  textBuscar='';
  columna='nombre';

  constructor(private departamento:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamento.stockarticulos();
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  articulo(){
    this.columna='nombre';
  }
  categoria(){
    this.columna='categoria';
  }


}
