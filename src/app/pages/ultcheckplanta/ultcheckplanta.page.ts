import { Component, OnInit } from '@angular/core';

import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ultcheckplanta',
  templateUrl: './ultcheckplanta.page.html',
  styleUrls: ['./ultcheckplanta.page.scss'],
})
export class UltcheckplantaPage implements OnInit {
  allchecks: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  
  constructor(private plantaService: PlantaconcretoService,
    private authService: AuthService) { 
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
    }

  ngOnInit() {
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

}
