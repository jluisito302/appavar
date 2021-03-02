import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';

@Component({
  selector: 'app-inversionobras',
  templateUrl: './inversionobras.page.html',
  styleUrls: ['./inversionobras.page.scss'],
})
export class InversionobrasPage implements OnInit {
  arreglo:{};
  constructor(private reportes:ReportesgerenteService) { }

  ngOnInit() {
    this.reportes.inversionobras().subscribe(data=>{
      this.arreglo=data;
    },error=>{
      console.log(error);
    });
  }

}
