import { Component, OnInit } from '@angular/core';
//IMPORTAR LA INTERFACE
import { OtRetro } from '../../interfaces/otretro';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-rordretro',
  templateUrl: './rordretro.page.html',
  styleUrls: ['./rordretro.page.scss'],
})
export class RordretroPage implements OnInit {

  allr: Observable<any>;
  usuario={};

  cont: number = 1;
  bandera=0;
  ot: OtRetro={
    folio: null,
    retroexcavadora: null,	
    operador: null,
    num_trabajador: null,
    fecha: null,
    turno: '1',
    hora_inicial: null,
    ubicacion_inicial: null,
    horometro_inicial: null,
    horometro_final: null,
    ubicacion_final: null,
    hora_final: null,
    combustible: null,
    aceite_hidraulico: null,
    aceite_transmision: null,
    aceite_motor: null,
    codigo_operacion1: null,
    nivel1: null,
    lugar1: null,
    empresa1: null,
    hora_inicial1: null,
    hora_final1: null,
    horometro_inicial1: null,
    horometro_final1: null,
    breve_descripcion1: null,
    codigo_operacion2: null,
    nivel2: null,
    lugar2: null,
    empresa2: null,
    hora_inicial2: null,
    hora_final2: null,
    horometro_inicial2: null,
    horometro_final2: null,
    breve_descripcion2: null,
    codigo_operacion3: null,
    nivel3: null,
    lugar3: null,
    empresa3: null,
    hora_inicial3: null,
    hora_final3: null,
    horometro_inicial3: null,
    horometro_final3: null,
    breve_descripcion3: null,
    codigo_operacion4: null,
    nivel4: null,
    lugar4: null,
    empresa4: null,
    hora_inicial4: null,
    hora_final4: null,
    horometro_inicial4: null,
    horometro_final4: null,
    breve_descripcion4: null,
    codigo_operacion5: null,
    nivel5: null,
    lugar5: null,
    empresa5: null,
    hora_inicial5: null,
    hora_final5: null,
    horometro_inicial5: null,
    horometro_final5: null,
    breve_descripcion5: null,
    codigo_operacion6: null,
    nivel6: null,
    lugar6:null,
    empresa6: null,
    hora_inicial6: null,
    hora_final6: null,
    horometro_inicial6: null,
    horometro_final6: null,
    breve_descripcion6: null,
    codigo_operacion7:null,	
    nivel7: null,
    lugar7: null,
    empresa7: null,
    hora_inicial7: null,
    hora_final7: null,
    horometro_inicial7: null,
    horometro_final7: null,
    breve_descripcion7:null,
    codigo_operacion8:null,
    nivel8:null,
    lugar8:null,
    empresa8: null,
    hora_inicial8:null,	
    hora_final8: null,
    horometro_inicial8: null,
    horometro_final8: null,
    breve_descripcion8:null,	
    nombre_sup_avar: null,
    nombre_sup_contratista: null,
    permiso_edicion: null,
    revisado_valido: null,
  }

  constructor(private retroservice: RetroService, private alertService: AlertService, 
    private router: Router, private authService: AuthService) { 

    this.allr=retroservice.getRetros();

    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.ot.operador=this.usuario['name'];
        this.ot.num_trabajador=this.usuario['username'];
      }
    );
  }

  ngOnInit() {
  }

  sumar(){
    if(this.cont <= 8){
      this.cont=this.cont+1;
    }
  }

  restar(){
    if(this.cont >= 2){
      this.cont=this.cont-1;
    }

    if(this.cont == 1){
      this.ot.codigo_operacion2 = '';
      this.ot.nivel2 = '';
      this.ot.lugar2 = '';	
      this.ot.empresa2 = '';	
      this.ot.hora_inicial2 = '';	
      this.ot.hora_final2 = '';	
      this.ot.breve_descripcion2 = '';	

      this.ot.codigo_operacion3 = '';
      this.ot.nivel3 = '';
      this.ot.lugar3 = '';	
      this.ot.empresa3 = '';	
      this.ot.hora_inicial3 = '';	
      this.ot.hora_final3 = '';	
      this.ot.breve_descripcion3 = '';

      this.ot.codigo_operacion4 = '';
      this.ot.nivel4 = '';
      this.ot.lugar4 = '';	
      this.ot.empresa4 = '';	
      this.ot.hora_inicial4 = '';	
      this.ot.hora_final4 = '';	
      this.ot.breve_descripcion4 = '';

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.hora_inicial5 = '';	
      this.ot.hora_final5 = '';	
      this.ot.breve_descripcion5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.hora_inicial6 = '';	
      this.ot.hora_final6 = '';	
      this.ot.breve_descripcion6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.hora_inicial7 = '';	
      this.ot.hora_final7 = '';	
      this.ot.breve_descripcion7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }

    if(this.cont == 2){	

      this.ot.codigo_operacion3 = '';
      this.ot.nivel3 = '';
      this.ot.lugar3 = '';	
      this.ot.empresa3 = '';	
      this.ot.hora_inicial3 = '';	
      this.ot.hora_final3 = '';	
      this.ot.breve_descripcion3 = '';

      this.ot.codigo_operacion4 = '';
      this.ot.nivel4 = '';
      this.ot.lugar4 = '';	
      this.ot.empresa4 = '';	
      this.ot.hora_inicial4 = '';	
      this.ot.hora_final4 = '';	
      this.ot.breve_descripcion4 = '';

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.hora_inicial5 = '';	
      this.ot.hora_final5 = '';	
      this.ot.breve_descripcion5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.hora_inicial6 = '';	
      this.ot.hora_final6 = '';	
      this.ot.breve_descripcion6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.hora_inicial7 = '';	
      this.ot.hora_final7 = '';	
      this.ot.breve_descripcion7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }

    if(this.cont == 3){	

      this.ot.codigo_operacion4 = '';
      this.ot.nivel4 = '';
      this.ot.lugar4 = '';	
      this.ot.empresa4 = '';	
      this.ot.hora_inicial4 = '';	
      this.ot.hora_final4 = '';	
      this.ot.breve_descripcion4 = '';

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.hora_inicial5 = '';	
      this.ot.hora_final5 = '';	
      this.ot.breve_descripcion5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.hora_inicial6 = '';	
      this.ot.hora_final6 = '';	
      this.ot.breve_descripcion6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.hora_inicial7 = '';	
      this.ot.hora_final7 = '';	
      this.ot.breve_descripcion7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }

    if(this.cont == 4){	

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.hora_inicial5 = '';	
      this.ot.hora_final5 = '';	
      this.ot.breve_descripcion5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.hora_inicial6 = '';	
      this.ot.hora_final6 = '';	
      this.ot.breve_descripcion6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.hora_inicial7 = '';	
      this.ot.hora_final7 = '';	
      this.ot.breve_descripcion7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }

    if(this.cont == 5){	

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.hora_inicial6 = '';	
      this.ot.hora_final6 = '';	
      this.ot.breve_descripcion6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.hora_inicial7 = '';	
      this.ot.hora_final7 = '';	
      this.ot.breve_descripcion7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }

    if(this.cont == 6){	

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.hora_inicial7 = '';	
      this.ot.hora_final7 = '';	
      this.ot.breve_descripcion7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }

    if(this.cont == 7){	

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.hora_inicial8 = '';	
      this.ot.hora_final8 = '';	
      this.ot.breve_descripcion8 = '';
    }
  }

  optionsFn( event , $param){
    this.ot[$param]=event.detail.value;
  }

  saveOT(){
    
    //  SI FALTAN LAS FECHAS
    if(this.ot.fecha == null ){
      this.alertService.error("El campo Fecha es requerido");
      this.bandera=1;
    }else{
      this.ot.fecha=moment(this.ot.fecha).format('YYYY-MM-DD');
    }

    if(this.ot.hora_inicial == null){
      this.alertService.error("Hora de inicial es requerido");
      this.bandera=1;
    }
    if(this.ot.turno == null){
      this.alertService.error("Turno es requerido");
      this.bandera=1;
    }
    if(this.ot.turno == null){
      this.alertService.error("Turno es requerido");
      this.bandera=1;
    }

    if(this.ot.hora_final == null){
      this.alertService.error("Hora final es requerido");
      this.bandera=1;
    }

    
    if(this.bandera == 1){
      this.alertService.error('Campo requerido');
      console.log(this.ot.fecha);
    }else{
      console.log(this.ot.fecha);
      this.retroservice.saveOT(this.ot).subscribe(data=>{
        if(data == 1){
          this.alertService.presentToast('Este folio ya existe');
        }else{
          this.alertService.presentToast('Actividades registrada correctamente');
          this.router.navigate(['/allotretro']);
        }
        
      }, error=>{
        this.alertService.error("Error al guardar");
      });
    }

    


  }//FIN DEL METHODO SAVE

  


}// fin de la clase
