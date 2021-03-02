import { Component, OnInit } from '@angular/core';

import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-allcheckplanta',
  templateUrl: './allcheckplanta.page.html',
  styleUrls: ['./allcheckplanta.page.scss'],
})
export class AllcheckplantaPage implements OnInit {

  allchecks: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor(private plantaService: PlantaconcretoService,
    private authService: AuthService
    ) { 
      /*
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          
          this.plantaService.allcheck(this.usuario['username']).subscribe(
            data=> {
              this.allchecks=data;
              this.dato$ = this.plantaService.allcheck(this.usuario['username']);
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
        this.dato$=this.plantaService.recientescheck(this.usuario['username']);
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
    this.columna='planta_concreto';
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.plantaService.recientescheck(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.plantaService.allcheck(this.usuario['username']);
        }
      );
    }
  }


}
