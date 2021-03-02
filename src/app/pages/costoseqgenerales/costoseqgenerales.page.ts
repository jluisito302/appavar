import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';

@Component({
  selector: 'app-costoseqgenerales',
  templateUrl: './costoseqgenerales.page.html',
  styleUrls: ['./costoseqgenerales.page.scss'],
})
export class CostoseqgeneralesPage implements OnInit {
  array:{};
  constructor(private reportes:ReportesgerenteService) { }

  ngOnInit() {
    this.array=this.reportes.mttocostgeneral();
  }

}
