import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-obrasproceso',
  templateUrl: './obrasproceso.page.html',
  styleUrls: ['./obrasproceso.page.scss'],
})
export class ObrasprocesoPage implements OnInit {
  array:Observable<any>;

  constructor(private departamento:DepartamentosService, private browser:InAppBrowser) { }

  ngOnInit() {
    this.array=this.departamento.obrasProceso();
  }

  bien(id){
    this.departamento.bienObras(id).subscribe(data=>{
      console.log(id);
      this.array=this.departamento.obrasProceso();
    },error=>{

    });
  }

  factura(id){
    this.browser.create('http://localhost/avar/public/down_factura/'+id+'/ZwX55GEAvd8', '_self');
  }

  hes(id){
    this.browser.create('http://localhost/avar/public/down_hes/'+id+'/ZwX55GEAvd8', '_self');
  }

}
