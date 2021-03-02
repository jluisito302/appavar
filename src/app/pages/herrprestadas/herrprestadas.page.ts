import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-herrprestadas',
  templateUrl: './herrprestadas.page.html',
  styleUrls: ['./herrprestadas.page.scss'],
})
export class HerrprestadasPage implements OnInit {
  array:Observable<any>;
  constructor(private departamento:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamento.herraPrestadas();
  }

}
