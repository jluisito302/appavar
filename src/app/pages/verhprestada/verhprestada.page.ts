import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verhprestada',
  templateUrl: './verhprestada.page.html',
  styleUrls: ['./verhprestada.page.scss'],
})
export class VerhprestadaPage implements OnInit {
  id:any;
  model:{}={
    herramienta:null,
    fecha_asignacion:null,
    empleado:null,
    persona_externa:null,
    quien_autoriza:null,
    estatus:null,
    fecha_regreso:null,
    regreso_condiciones:null
  };
  constructor(private activateRoute: ActivatedRoute, private depa:DepartamentosService) { 
    this.id = this.activateRoute.snapshot.params['id'];

    this.depa.verHPrestada(this.id).subscribe(data=>{
      this.model=data;
    },error=>{

    });

  }

  ngOnInit() {
  }

}
