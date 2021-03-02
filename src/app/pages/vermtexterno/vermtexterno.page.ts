import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vermtexterno',
  templateUrl: './vermtexterno.page.html',
  styleUrls: ['./vermtexterno.page.scss'],
})
export class VermtexternoPage implements OnInit {
  id:number;
  modelo={};
  suma:any;
  constructor(private activateRoute: ActivatedRoute, private departamento:DepartamentosService) { 
    this.id = this.activateRoute.snapshot.params['id'];
    this.departamento.sumarmtexterno(this.id).subscribe(data=>{
      this.suma=data;
    }, error=>{

    });
  }

  ngOnInit() {
    this.departamento.buscarmtExterno(this.id).subscribe(data=>{
      this.modelo=data;
    }, error=>{

    });

  }

}
