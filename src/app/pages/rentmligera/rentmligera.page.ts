import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rentmligera',
  templateUrl: './rentmligera.page.html',
  styleUrls: ['./rentmligera.page.scss'],
})
export class RentmligeraPage implements OnInit {
  array:Observable<any>;
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.showRentLigera();
  }

  valido(id){
    this.departamentos.bienRentaPesada(id).subscribe(data=>{
      this.array=this.departamentos.showRentLigera();
    },error=>{

    });
  }

}
