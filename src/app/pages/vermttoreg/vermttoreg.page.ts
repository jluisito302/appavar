import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vermttoreg',
  templateUrl: './vermttoreg.page.html',
  styleUrls: ['./vermttoreg.page.scss'],
})
export class VermttoregPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.equipos();
  }

}
