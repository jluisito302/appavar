import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { ObraService } from '../../services/obra.service';

@Component({
  selector: 'app-allotobra',
  templateUrl: './allotobra.page.html',
  styleUrls: ['./allotobra.page.scss'],
})
export class AllotobraPage implements OnInit {
  allot: {};
  dato$:Observable<any>;
  usuario: {};
  textBuscar='';
  columna='folio';
  eleccion='';

  constructor(private obrasService: ObraService, private authService: AuthService) { 
    /*
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.obrasService.allot(this.usuario['username']);
          
      }
    );*/
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.dato$=this.obrasService.otrecientes(this.usuario['username']);
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
  obra(){
    this.columna='nombre_obra';
  }

  segmentChanged(event){
    this.eleccion=event.detail.value;
    if(this.eleccion == 'recientes'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.obrasService.otrecientes(this.usuario['username']);
        }
      );
    }
    if(this.eleccion == 'todos'){
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.dato$=this.obrasService.allot(this.usuario['username']);
        }
      );
    }
  }


}
