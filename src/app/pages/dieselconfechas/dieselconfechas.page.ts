import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-dieselconfechas',
  templateUrl: './dieselconfechas.page.html',
  styleUrls: ['./dieselconfechas.page.scss'],
})
export class DieselconfechasPage implements OnInit {
  model={
    fechainicial: null,
    fechafinal: null
  };
  array:{};
  constructor(private reportes:ReportesgerenteService, private alertService: AlertService) { }

  ngOnInit() {
  }

  consultar(){
    this.reportes.costdieselfechas(this.model).subscribe(data=>{
      this.array=data;
    },error=>{
      this.alertService.error("Error del servidor");
    });
  }

}
