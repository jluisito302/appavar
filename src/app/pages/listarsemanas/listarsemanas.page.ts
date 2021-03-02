import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-listarsemanas',
  templateUrl: './listarsemanas.page.html',
  styleUrls: ['./listarsemanas.page.scss'],
})
export class ListarsemanasPage implements OnInit {
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
    this.reportes.listaspsemanas(this.model).subscribe(data => {
      this.valor=data;
    }, error => {
      console.log(error);
      this.alertService.error("Error del servidor");
    });
  }

}
