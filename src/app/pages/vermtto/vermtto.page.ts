import { Component, OnInit } from '@angular/core';
import { MttoserviceService } from '../../services/mttoservice.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-vermtto',
  templateUrl: './vermtto.page.html',
  styleUrls: ['./vermtto.page.scss'],
})
export class VermttoPage implements OnInit {
  
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='equipo';
  eleccion='';

  constructor(private mttoService:MttoserviceService, private authService: AuthService) { }
  
  ngOnInit() {
    this.dato$=this.mttoService.recientes();
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        console.log(this.usuario);
      }
    );
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  equipo(){
    this.columna='equipo';
  }
  servicio(){
    this.columna='tipo_servicio';
  }
  fecha(){
    this.columna='fecha';
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.dato$=this.mttoService.recientes();
    }
    if(this.eleccion == 'todos'){
      this.dato$=this.mttoService.todos();
    }
  }

}
