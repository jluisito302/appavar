import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-nominasprfechas',
  templateUrl: './nominasprfechas.page.html',
  styleUrls: ['./nominasprfechas.page.scss'],
})
export class NominasprfechasPage implements OnInit {
  model={
    fechainicial: null,
    fechafinal: null
  };
  valor:any;
  constructor(private reportes:ReportesgerenteService, private alertService: AlertService) { }

  ngOnInit() {
  }

  consultar(){
    this.reportes.nominasporfechas(this.model).subscribe(data => {
      this.valor=data;
    }, error => {
      console.log(error);
      this.alertService.error("Error del servidor");
    });
  }



}
