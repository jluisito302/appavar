import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-invrubrosfechas',
  templateUrl: './invrubrosfechas.page.html',
  styleUrls: ['./invrubrosfechas.page.scss'],
})
export class InvrubrosfechasPage implements OnInit {
  model={
    fechainicial: null,
    fechafinal: null
  };
  array:{};
  constructor(private reportes:ReportesgerenteService, private alertService: AlertService) { }

  ngOnInit() {
  }

  consultar(){
    this.reportes.costRubFechas(this.model).subscribe(data => {
      this.array=data;
      console.log(this.array);
    }, error => {
      console.log(error);
      this.alertService.error("Error del servidor");
    });
  }


}
