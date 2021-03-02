import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showcobros',
  templateUrl: './showcobros.page.html',
  styleUrls: ['./showcobros.page.scss'],
})
export class ShowcobrosPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.showcobros();
  }

  valido(id){
    this.departamentos.bienCobos(id).subscribe(data=>{
      this.array=this.departamentos.showcobros();
    },error=>{

    });
  }

}
