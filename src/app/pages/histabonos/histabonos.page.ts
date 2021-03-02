import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-histabonos',
  templateUrl: './histabonos.page.html',
  styleUrls: ['./histabonos.page.scss'],
})
export class HistabonosPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.histabonos();
  }

  valido(id){
    this.departamentos.bienHbonos(id).subscribe(data=>{
      this.array=this.departamentos.histabonos();
    },error=>{

    });
  }

}
