import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-costosmttorfechas',
  templateUrl: './costosmttorfechas.page.html',
  styleUrls: ['./costosmttorfechas.page.scss'],
})
export class CostosmttorfechasPage implements OnInit {
  model={
    fechainicial: null,
    fechafinal: null
  };
  array:{};
  constructor(private reportes:ReportesgerenteService, private alertService: AlertService) { }

  ngOnInit() {
  }

  consultar(){
    this.reportes.costosmttofechas(this.model).subscribe(data=>{
      this.array= this.reportes.costosmttofechas(this.model);
    },error=>{
      this.alertService.error("Error del servidor");
    });
  }


}
