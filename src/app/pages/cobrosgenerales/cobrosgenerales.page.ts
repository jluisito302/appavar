import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cobrosgenerales',
  templateUrl: './cobrosgenerales.page.html',
  styleUrls: ['./cobrosgenerales.page.scss'],
})
export class CobrosgeneralesPage implements OnInit {
  arreglo$: Observable <any>;
  constructor(private reportes:ReportesgerenteService) { }

  ngOnInit() {
    this.arreglo$=this.reportes.getcostosObras();
  }

}
