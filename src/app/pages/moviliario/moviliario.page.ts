import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-moviliario',
  templateUrl: './moviliario.page.html',
  styleUrls: ['./moviliario.page.scss'],
})
export class MoviliarioPage implements OnInit {
  array:Observable<any>;
  cont=0;
  arreglo:{};
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.moviliario();
  }
  
  valido(id){
    this.departamentos.bienMoviliario(id).subscribe(data=>{
      this.array=this.departamentos.moviliario();
    },error=>{

    });
  }


}