import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rentampesada',
  templateUrl: './rentampesada.page.html',
  styleUrls: ['./rentampesada.page.scss'],
})
export class RentampesadaPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.showRentapesada();
  }

  valido(id){
    this.departamentos.bienRentaPesada(id).subscribe(data=>{
      this.array=this.departamentos.showRentapesada();
    },error=>{

    });
  }

}
