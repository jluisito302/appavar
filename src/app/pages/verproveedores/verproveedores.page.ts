import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-verproveedores',
  templateUrl: './verproveedores.page.html',
  styleUrls: ['./verproveedores.page.scss'],
})
export class VerproveedoresPage implements OnInit {
  array:Observable<any>;
 

  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.verproveedores();
  }

}
