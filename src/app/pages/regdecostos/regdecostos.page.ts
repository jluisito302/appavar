import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-regdecostos',
  templateUrl: './regdecostos.page.html',
  styleUrls: ['./regdecostos.page.scss'],
})
export class RegdecostosPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.verregcostos();
  }

  bien(item){
    this.departamentos.bienregcostos(item).subscribe(data=>{
      this.array=this.departamentos.verregcostos();
    },error=>{

    });
  }


}
