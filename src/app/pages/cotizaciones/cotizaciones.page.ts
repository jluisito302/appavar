import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.page.html',
  styleUrls: ['./cotizaciones.page.scss'],
})
export class CotizacionesPage implements OnInit {
  array:Observable<any>;
  constructor(private departamento:DepartamentosService, private browser:InAppBrowser) { }

  ngOnInit() {
    this.array=this.departamento.cotizacionesApi();
  }

  bien(id){
    this.departamento.bienCotizaciones(id).subscribe(data=>{
      this.array=this.departamento.cotizacionesApi();
    },error=>{

    });
  }

  abrir(id){
    //this.browser.create('https://unsplash.com/', '_self');
    this.browser.create('https://avar-construcciones.com/sistema/downcotizacionapi/'+id+'/Amadeo', '_system');
  }

}
