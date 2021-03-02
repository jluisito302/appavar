import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-vermttos',
  templateUrl: './vermttos.page.html',
  styleUrls: ['./vermttos.page.scss'],
})
export class VermttosPage implements OnInit {
  array:Observable<any>;
  
  constructor(private departamentos:DepartamentosService) { }

  ngOnInit() {
    this.array=this.departamentos.vermttos();
  }

  ver(item){
  }

}
