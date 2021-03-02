import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ReportesgerenteService } from '../../services/reportesgerente.service';

@Component({
  selector: 'app-cobradetallado',
  templateUrl: './cobradetallado.page.html',
  styleUrls: ['./cobradetallado.page.scss'],
})
export class CobradetalladoPage implements OnInit {
  id:any;
  obra={};
  datos:Observable<any>;
  constructor(private activateRoute: ActivatedRoute, private reportes:ReportesgerenteService) { 
    this.id = this.activateRoute.snapshot.params['id'];

    this.reportes.obraid(this.id).subscribe(data=>{
      this.obra=data;
    },error=>{

    });

    this.datos=this.reportes.cObrasDetall(this.id);
    console.log(this.datos);
  }

  ngOnInit() {
  }

}
