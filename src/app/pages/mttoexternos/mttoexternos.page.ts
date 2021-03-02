import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mttoexternos',
  templateUrl: './mttoexternos.page.html',
  styleUrls: ['./mttoexternos.page.scss'],
})
export class MttoexternosPage implements OnInit {
  array:Observable<any>;
  total:number;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.mttoTExternos();
  }

  valido(id){
    this.departamentos.bienMttExternos(id).subscribe(data=>{
      this.array=this.departamentos.mttoTExternos();
    },error=>{

    });
  }

  

}
