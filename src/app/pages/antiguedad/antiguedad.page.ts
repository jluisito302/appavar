import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-antiguedad',
  templateUrl: './antiguedad.page.html',
  styleUrls: ['./antiguedad.page.scss'],
})
export class AntiguedadPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.antigEmpleados();
    
  }

}
