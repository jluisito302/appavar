import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';

@Component({
  selector: 'app-dieselconsgeneral',
  templateUrl: './dieselconsgeneral.page.html',
  styleUrls: ['./dieselconsgeneral.page.scss'],
})
export class DieselconsgeneralPage implements OnInit {
  array:{};
  constructor(private reportes:ReportesgerenteService) { }

  ngOnInit() {
    this.array=this.reportes.dieselcongeneral();
  }

  consultar(){

  }
}
