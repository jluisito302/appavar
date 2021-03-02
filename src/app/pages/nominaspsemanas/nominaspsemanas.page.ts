import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-nominaspsemanas',
  templateUrl: './nominaspsemanas.page.html',
  styleUrls: ['./nominaspsemanas.page.scss'],
})
export class NominaspsemanasPage implements OnInit {
  model={
    semanainicial: null,
    semanafinal: null
  };
  valor:any;
  semanas1:{};
  semanas2:{};
  constructor(private reportes:ReportesgerenteService, private alertService: AlertService) { }

  ngOnInit() {
    this.semanas1=this.reportes.getSemanas();
    this.semanas2=this.reportes.getSemanas();
  }

  consultar(){
    this.reportes.nominaspsemanas(this.model).subscribe(data => {
      this.valor=data;
    }, error => {
      console.log(error);
      this.alertService.error("Error del servidor");
    });
  }


}
