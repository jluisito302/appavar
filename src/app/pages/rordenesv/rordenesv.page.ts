import { Component, OnInit } from '@angular/core';
//IMPORTADOS
//IMPORTAR EL SERVICIO
import { RcheckvService } from '../../services/rcheckv.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';
//IMPORTAR LA INTERFACE
import { OtVehiculos } from '../../interfaces/otvehiculos';

@Component({
  selector: 'app-rordenesv',
  templateUrl: './rordenesv.page.html',
  styleUrls: ['./rordenesv.page.scss'],
})

export class RordenesvPage implements OnInit {

  allv: Observable<any>;
  list: Array<Element>; 
  //inicializamos los users
  user: User;
  usuario={};
  bandera=0;

  cont: number = 1;

  ot: OtVehiculos ={
    folio: null,
    vehiculo: null,
    conductor: null,
    num_empleado: null,	
    fecha: null,	
    turno: '1',	
    d_hora_inicial: null,	
    d_ubicacion_ini: null,	
    kilometraje_ini: null,	
    kilometraje_final: null,	
    ubicacion_final: null,
    d_hora_final: null,	
    combustible: null,	
    aceite_hidraulico: null,	
    aceite_transmision: null,	
    aceite_motor: null,	
    cod_operacion1: null,	
    nivel1: null,	
    lugar1: null,	
    empresa1: null,	
    hora_inicial1: null,	
    hora_final1: null,	
    b_descripcion1: null,	
    cod_operacion2: null,	
    nivel2: null,	
    lugar2: null,	
    empresa2: null,	
    hora_inicial2: null,	
    hora_final2: null,	
    b_descripcion2: null,	
    cod_operacion3: null,	
    nivel3: null,
    lugar3: null,	
    empresa3: null,	
    hora_inicial3: null,	
    hora_final3: null,	
    b_descripcion3: null,	
    cod_operacion4: null,	
    nivel4: null,	
    lugar4: null,	
    empresa4: null,	
    hora_inicial4: null,	
    hora_final4: null,	
    b_descripcion4: null,	
    cod_operacion5: null,	
    nivel5: null,	
    lugar5: null,	
    empresa5: null,	
    hora_inicial5: null,	
    hora_final5: null,	
    b_descripcion5: null,	
    cod_operacion6: null,	
    nivel6: null,	
    lugar6: null,	
    empresa6: null,	
    hora_inicial6: null,	
    hora_final6: null,	
    b_descripcion6: null,	
    cod_operacion7: null,	
    nivel7: null,	
    lugar7: null,	
    empresa7: null,	
    hora_inicial7: null,	
    hora_final7: null,	
    b_descripcion7: null,	
    cod_operacion8: null,	
    nivel8: null,	
    lugar8: null,	
    empresa8: null,
    hora_inicial8: null,	
    hora_final8: null,	
    b_descripcion8: null,
    observaciones:null,	
    nombre_operador1: null,	
    nombre_sup_avar: null,	
    nombre_contratista: null,	
    falla_mecanica: null,	
    falla_electrica: null,	
    danos_equipo: null,
    caida_roca: null,	
    golpe_choque: null,	
    obstruccion_via: null,	
    vent_deficiente: null,	
    mant_rampa: null,	
    permiso_edicion: null,	
    revisado_valido: null,
  }

  constructor(
    private rcheckservice: RcheckvService,
     private activateRoute: ActivatedRoute, 
     private alertService: AlertService,
     private router:Router, private authService: AuthService) {

      this.allv=this.rcheckservice.getVehiculos();
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          this.ot['nombre_operador1']=this.usuario['name'];
          this.ot['conductor']=this.usuario['name'];
          this.ot['num_empleado']=this.usuario['username'];
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
      this.ot.cod_operacion2 = null;
      this.ot.nivel2 = null;
      this.ot.lugar2 = null;	
      this.ot.empresa2 = null;	
      this.ot.hora_inicial2 = null;	
      this.ot.hora_final2 = null;	
      this.ot.b_descripcion2 = null;	

      this.ot.cod_operacion3 = null;
      this.ot.nivel3 = null;
      this.ot.lugar3 = null;	
      this.ot.empresa3 = null;	
      this.ot.hora_inicial3 = null;	
      this.ot.hora_final3 = null;	
      this.ot.b_descripcion3 = null;

      this.ot.cod_operacion4 = null;
      this.ot.nivel4 = null;
      this.ot.lugar4 = null;	
      this.ot.empresa4 = null;	
      this.ot.hora_inicial4 = null;	
      this.ot.b_descripcion4 = null;

      this.ot.cod_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.b_descripcion5 = null;

      this.ot.cod_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.b_descripcion6 = null;

      this.ot.cod_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.b_descripcion7 = null;

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }

    if(this.cont == 2){	

      this.ot.cod_operacion3 = null;
      this.ot.nivel3 = null;
      this.ot.lugar3 = null;	
      this.ot.empresa3 = null;	
      this.ot.hora_inicial3 = null;	
      this.ot.hora_final3 = null;	
      this.ot.b_descripcion3 = null;

      this.ot.cod_operacion4 = null;
      this.ot.nivel4 = null;
      this.ot.lugar4 = null;	
      this.ot.empresa4 = null;	
      this.ot.hora_inicial4 = null;	
      this.ot.hora_final4 = null;	
      this.ot.b_descripcion4 = null;

      this.ot.cod_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.b_descripcion5 = null;

      this.ot.cod_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.b_descripcion6 = null;

      this.ot.cod_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.b_descripcion7 = null;

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }

    if(this.cont == 3){	

      this.ot.cod_operacion4 = null;
      this.ot.nivel4 = null;
      this.ot.lugar4 = null;	
      this.ot.empresa4 = null;	
      this.ot.hora_inicial4 = null;	
      this.ot.hora_final4 = null;	
      this.ot.b_descripcion4 = null;

      this.ot.cod_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.b_descripcion5 = null;

      this.ot.cod_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.b_descripcion6 = null;

      this.ot.cod_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.b_descripcion7 = null;

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }

    if(this.cont == 4){	

      this.ot.cod_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.b_descripcion5 = null;

      this.ot.cod_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.b_descripcion6 = null;

      this.ot.cod_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.b_descripcion7 = null;

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }

    if(this.cont == 5){	

      this.ot.cod_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.b_descripcion6 = null;

      this.ot.cod_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.b_descripcion7 = null;

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }

    if(this.cont == 6){	

      this.ot.cod_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.b_descripcion7 = null;

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }

    if(this.cont == 7){	

      this.ot.cod_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.b_descripcion8 = null;
    }
  }
  
  optionsFn( event , $param){
    this.ot[$param]=event.detail.value;
  }

  saveOT(){

    //  SI FALTAN LAS FECHAS
    if(this.ot.fecha == null){
      this.alertService.error("El campo Fecha requerido");
      this.bandera=1;
    }else{
      this.ot.fecha=moment(this.ot.fecha).format('YYYY-MM-DD');
    }
    
    if(this.ot.folio == null){
      this.alertService.error("El campo folio requerido");
      this.bandera=1;
    }

    if(this.ot.d_hora_inicial == null){
      this.alertService.error("Hora de inicial es requerido");
      this.bandera=1;
    }
    if(this.ot.vehiculo == null){
      this.alertService.error("Vehiculo es requerido");
      this.bandera=1;
    }

    if(this.ot.d_hora_final == null){
      this.alertService.error("Hora final es requerido");
      this.bandera=1;
    }

    if(this.bandera == 1){
      this.alertService.error("Campo requerido");
    }else{
      this.rcheckservice.insertorden(this.ot).subscribe(data=>{
        if(data == 1){
          this.alertService.error("Este folio ya existe");
        }else{
          this.alertService.presentToast("Actividad insertada correctamente...");
          this.router.navigate(['/allordenesv']);
        }
      }, error => {
        console.log(error);
        this.alertService.error("Error al guardar");
      });
    }
    
    
  }

}// fin de la clase
