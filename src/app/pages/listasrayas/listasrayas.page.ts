import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listasrayas',
  templateUrl: './listasrayas.page.html',
  styleUrls: ['./listasrayas.page.scss'],
})
export class ListasrayasPage implements OnInit {
  array:Observable<any>;

  constructor(private departamentos:DepartamentosService, private browser:InAppBrowser) { }

  ngOnInit() {
    this.array=this.departamentos.hnominasguardadas();
  }

  superficie(id){
    this.browser.create('https://avar-construcciones.com/sistema/downlsuperficie/'+id+'/ZwX55GEAvd8', '_system');
  }

  intmina(id){
    this.browser.create('https://avar-construcciones.com/sistema/downlinterior/'+id+'/ZwX55GEAvd8', '_system');
  }

}
