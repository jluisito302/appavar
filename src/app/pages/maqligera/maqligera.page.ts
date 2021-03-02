import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-maqligera',
  templateUrl: './maqligera.page.html',
  styleUrls: ['./maqligera.page.scss'],
})
export class MaqligeraPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.maquinariaLigera();
  }

}
