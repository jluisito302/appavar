import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-allotplanta',
  templateUrl: './allotplanta.page.html',
  styleUrls: ['./allotplanta.page.scss'],
})

export class AllotplantaPage implements OnInit {
  allots: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor(private plantaService: PlantaconcretoService,  private authService: AuthService) { 
    /*
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.plantaService.allot(this.usuario['username']).subscribe(
          data=> {
            this.allots=data;
            this.dato$=this.plantaService.allot(this.usuario['username']);
          }, error => {
            alert('Error');
            console.log(error);
          });
      }
    );
    */
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.plantaService.otRecientes(this.usuario['username']);
      }
    );
  }

  buscar(event){
    this.textBuscar=event.detail.value;
  }

  folio(){
    this.columna='folio';
  }
  fecha(){
    this.columna='fecha';
  }
  planta(){
    this.columna='camion';
  }


  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.plantaService.otRecientes(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.plantaService.allot(this.usuario['username']);
        }
      );
    }
  }


}
