import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.showEmpleados();
  }

}
