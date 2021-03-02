import { Component, OnInit } from '@angular/core';
import { ReportesgerenteService } from '../../services/reportesgerente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estatuscreditos',
  templateUrl: './estatuscreditos.page.html',
  styleUrls: ['./estatuscreditos.page.scss'],
})
export class EstatuscreditosPage implements OnInit {
  arreglo$: Observable <any>;
  constructor(private reportes:ReportesgerenteService) { }
  
 
  ngOnInit() {
    this.arreglo$=this.reportes.estatuscreditos();
  }

}
