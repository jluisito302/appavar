import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-ultotplanta',
  templateUrl: './ultotplanta.page.html',
  styleUrls: ['./ultotplanta.page.scss'],
})
export class UltotplantaPage implements OnInit {
  allots: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';

  constructor(private plantaService: PlantaconcretoService,  private authService: AuthService) { 
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.plantaService.otRecientes(this.usuario['username']).subscribe(
          data=> {
            this.allots=data;
            this.dato$=this.plantaService.otRecientes(this.usuario['username']);
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
    this.columna='camion';
  }

}
