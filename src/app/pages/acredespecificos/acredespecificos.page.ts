import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-acredespecificos',
  templateUrl: './acredespecificos.page.html',
  styleUrls: ['./acredespecificos.page.scss'],
})

export class AcredespecificosPage implements OnInit {
  model={
    proveedor: null
  };
  $proveedores: {};
  $lista:any;

  constructor(private reportes:ReportesgerenteService, private alertService: AlertService) { 
    
  }

  ngOnInit() {
    this.reportes.getProvedores().subscribe(data=>{
      this.$proveedores=data;
    }, error=>{

    });
  }

  enviar(){
    if (this.model.proveedor == null) {
      this.alertService.error("No has elegido ninguno");
    }else{
      this.reportes.buscarabonos(this.model).subscribe(data=>{
        console.log(data);
        this.$lista=data;
      }, error=>{
        console.log(error);
      });
    }
    
  }

}
