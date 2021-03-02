import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-histnominas',
  templateUrl: './histnominas.page.html',
  styleUrls: ['./histnominas.page.scss'],
})
export class HistnominasPage implements OnInit {
  array:Observable<any>;
  
  constructor(private departamentos:DepartamentosService, private browser:InAppBrowser) { }

  ngOnInit() {
    this.array=this.departamentos.hnominasguardadas();
  }

  pdf(id){
    this.browser.create('https://avar-construcciones.com/sistema/nominadowload/'+id+'/ZwX55GEAvd8', '_system');
  }


}
