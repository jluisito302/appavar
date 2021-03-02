import { Component, OnInit } from '@angular/core';

import { OtManipulador } from '../../interfaces/otmanip';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { ManipuladorService } from 'src/app/services/manipulador.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rottele',
  templateUrl: './rottele.page.html',
  styleUrls: ['./rottele.page.scss'],
})
export class RottelePage implements OnInit {
  manip$: Observable<any>;
  usuario={};
  bandera=0;
  cont: number = 1;
  ot: OtManipulador={
    folio: null,	
    manipulador: null,
    fecha: null,
    operador: null,	
    num_trabajador: null,	
    consumo_diesel: null,	
    consumo_aceite_motor: null,	
    consumo_aceite_transmision: null,	
    consumo_aceite_hidraulico:null,	
    turno: '1',
    hora_inicial: null,	
    hora_final: null,	
    ubicacion_inicial: null,	
    horom_inicial: null,
    horom_final: null,
    ubicacion_final: null,
    a_codigo_operacion1: null,
    a_nivel1: null,
    a_tajo1: null,
    a_labor1: null,
    a_empresa1: null,
    a_hora_inicial1: null,	
    a_hora_final1: null,	
    descripcion_breve1: null,	
    a_codigo_operacion2: null,	
    a_nivel2: null,	
    a_tajo2: null,	
    a_labor2: null,	
    a_empresa2: null,
    a_hora_inicial2:null,
    a_hora_final2:null,
    descripcion_breve2:null,
    a_codigo_operacion3:null,
    a_nivel3: null,
    a_tajo3: null,
    a_labor3: null,
    a_empresa3: null,
    a_hora_inicial3: null,
    a_hora_final3: null,
    descripcion_breve3: null,
    a_codigo_operacion4: null,
    a_nivel4: null,
    a_tajo4: null,
    a_labor4: null,
    a_empresa4: null,
    a_hora_inicial4: null,
    a_hora_final4: null,
    descripcion_breve4: null,
    a_codigo_operacion5: null,
    a_nivel5: null,
    a_tajo5: null,
    a_labor5: null,
    a_empresa5: null,
    a_hora_inicial5: null,
    a_hora_final5: null,
    descripcion_breve5: null,
    a_codigo_operacion6: null,
    a_nivel6: null,
    a_tajo6: null,
    a_labor6: null,
    a_empresa6: null,
    a_hora_inicial6: null,
    a_hora_final6: null,
    descripcion_breve6: null,
    a_codigo_operacion7: null,
    a_nivel7: null,
    a_tajo7: null,
    a_labor7: null,
    a_empresa7: null,
    a_hora_inicial7: null,
    a_hora_final7: null,
    descripcion_breve7: null,
    a_codigo_operacion8: null,
    a_nivel8: null,
    a_tajo8: null,
    a_labor8: null,
    a_empresa8: null,
    a_hora_inicial8: null,
    a_hora_final8: null,
    descripcion_breve8: null,
    nombre_supervisor_contratista: null,
    nombre_supervisor_cmc: null,
    revisado_valido: null,
    permiso_edicion: null
  }

  constructor(private manipService: ManipuladorService, private alertService: AlertService, 
    private router: Router, private authService: AuthService) { 
      this.manip$=this.manipService.allmanip();

      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          
          this.ot['operador']=this.usuario['name'];
          this.ot['num_trabajador']=this.usuario['username'];
        }
      );
  }

  ngOnInit() {
  }

  optionsFn( event , $param){
    this.ot[$param]=event.detail.value;
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
      this.ot.a_codigo_operacion2 = null;
      this.ot.a_nivel2 = null;
      this.ot.a_labor2 = null;	
      this.ot.a_empresa2 = null;	
      this.ot.a_hora_inicial2 = null;	
      this.ot.a_hora_final2 = null;	
      this.ot.descripcion_breve2 = null;	

      this.ot.a_codigo_operacion3 = null;
      this.ot.a_nivel3 = null;
      this.ot.a_labor3 = null;	
      this.ot.a_empresa3 = null;	
      this.ot.a_hora_inicial3 = null;	
      this.ot.a_hora_final3 = null;	
      this.ot.descripcion_breve3 = null;

      this.ot.a_codigo_operacion4 = null;
      this.ot.a_nivel4 = null;
      this.ot.a_labor4 = null;	
      this.ot.a_empresa4 = null;	
      this.ot.a_hora_inicial4 = null;	
      this.ot.a_hora_final4 = null;	
      this.ot.descripcion_breve4 = null;

      this.ot.a_codigo_operacion5 = null;
      this.ot.a_nivel5 = null;
      this.ot.a_labor5 = null;	
      this.ot.a_empresa5 = null;	
      this.ot.a_hora_inicial5 = null;	
      this.ot.a_hora_final5 = null;	
      this.ot.descripcion_breve5 = null;

      this.ot.a_codigo_operacion6 = null;
      this.ot.a_nivel6 = null;
      this.ot.a_labor6 = null;	
      this.ot.a_empresa6 = null;	
      this.ot.a_hora_inicial6 = null;	
      this.ot.a_hora_final6 = null;	
      this.ot.descripcion_breve6 = null;

      this.ot.a_codigo_operacion7 = null;
      this.ot.a_nivel7 = null;
      this.ot.a_labor7 = null;	
      this.ot.a_empresa7 = null;	
      this.ot.a_hora_inicial7 = null;	
      this.ot.a_hora_final7 = null;	
      this.ot.descripcion_breve7 = null;

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }

    if(this.cont == 2){	

      this.ot.a_codigo_operacion3 = null;
      this.ot.a_nivel3 = null;
      this.ot.a_labor3 = null;	
      this.ot.a_empresa3 = null;	
      this.ot.a_hora_inicial3 = null;	
      this.ot.a_hora_final3 = null;	
      this.ot.descripcion_breve3 = null;

      this.ot.a_codigo_operacion4 = null;
      this.ot.a_nivel4 = null;
      this.ot.a_labor4 = null;	
      this.ot.a_empresa4 = null;	
      this.ot.a_hora_inicial4 = null;	
      this.ot.a_hora_final4 = null;	
      this.ot.descripcion_breve4 = null;

      this.ot.a_codigo_operacion5 = null;
      this.ot.a_nivel5 = null;
      this.ot.a_labor5 = null;	
      this.ot.a_empresa5 = null;	
      this.ot.a_hora_inicial5 = null;	
      this.ot.a_hora_final5 = null;	
      this.ot.descripcion_breve5 = null;

      this.ot.a_codigo_operacion6 = null;
      this.ot.a_nivel6 = null;
      this.ot.a_labor6 = null;	
      this.ot.a_empresa6 = null;	
      this.ot.a_hora_inicial6 = null;	
      this.ot.a_hora_final6 = null;	
      this.ot.descripcion_breve6 = null;

      this.ot.a_codigo_operacion7 = null;
      this.ot.a_nivel7 = null;
      this.ot.a_labor7 = null;	
      this.ot.a_empresa7 = null;	
      this.ot.a_hora_inicial7 = null;	
      this.ot.a_hora_final7 = null;	
      this.ot.descripcion_breve7 = null;

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }

    if(this.cont == 3){	

      this.ot.a_codigo_operacion4 = null;
      this.ot.a_nivel4 = null;
      this.ot.a_labor4 = null;	
      this.ot.a_empresa4 = null;	
      this.ot.a_hora_inicial4 = null;	
      this.ot.a_hora_final4 = null;	
      this.ot.descripcion_breve4 = null;

      this.ot.a_codigo_operacion5 = null;
      this.ot.a_nivel5 = null;
      this.ot.a_labor5 = null;	
      this.ot.a_empresa5 = null;	
      this.ot.a_hora_inicial5 = null;	
      this.ot.a_hora_final5 = null;	
      this.ot.descripcion_breve5 = null;

      this.ot.a_codigo_operacion6 = null;
      this.ot.a_nivel6 = null;
      this.ot.a_labor6 = null;	
      this.ot.a_empresa6 = null;	
      this.ot.a_hora_inicial6 = null;	
      this.ot.a_hora_final6 = null;	
      this.ot.descripcion_breve6 = null;

      this.ot.a_codigo_operacion7 = null;
      this.ot.a_nivel7 = null;
      this.ot.a_labor7 = null;	
      this.ot.a_empresa7 = null;	
      this.ot.a_hora_inicial7 = null;	
      this.ot.a_hora_final7 = null;	
      this.ot.descripcion_breve7 = null;

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }

    if(this.cont == 4){	

      this.ot.a_codigo_operacion5 = null;
      this.ot.a_nivel5 = null;
      this.ot.a_labor5 = null;	
      this.ot.a_empresa5 = null;	
      this.ot.a_hora_inicial5 = null;	
      this.ot.a_hora_final5 = null;	
      this.ot.descripcion_breve5 = null;

      this.ot.a_codigo_operacion6 = null;
      this.ot.a_nivel6 = null;
      this.ot.a_labor6 = null;	
      this.ot.a_empresa6 = null;	
      this.ot.a_hora_inicial6 = null;	
      this.ot.a_hora_final6 = null;	
      this.ot.descripcion_breve6 = null;

      this.ot.a_codigo_operacion7 = null;
      this.ot.a_nivel7 = null;
      this.ot.a_labor7 = null;	
      this.ot.a_empresa7 = null;	
      this.ot.a_hora_inicial7 = null;	
      this.ot.a_hora_final7 = null;	
      this.ot.descripcion_breve7 = null;

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }

    if(this.cont == 5){	

      this.ot.a_codigo_operacion6 = null;
      this.ot.a_nivel6 = null;
      this.ot.a_labor6 = null;	
      this.ot.a_empresa6 = null;	
      this.ot.a_hora_inicial6 = null;	
      this.ot.a_hora_final6 = null;	
      this.ot.descripcion_breve6 = null;

      this.ot.a_codigo_operacion7 = null;
      this.ot.a_nivel7 = null;
      this.ot.a_labor7 = null;	
      this.ot.a_empresa7 = null;	
      this.ot.a_hora_inicial7 = null;	
      this.ot.a_hora_final7 = null;	
      this.ot.descripcion_breve7 = null;

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }

    if(this.cont == 6){	

      this.ot.a_codigo_operacion7 = null;
      this.ot.a_nivel7 = null;
      this.ot.a_labor7 = null;	
      this.ot.a_empresa7 = null;	
      this.ot.a_hora_inicial7 = null;	
      this.ot.a_hora_final7 = null;	
      this.ot.descripcion_breve7 = null;

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }

    if(this.cont == 7){	

      this.ot.a_codigo_operacion8 = null;
      this.ot.a_nivel8 = null;
      this.ot.a_labor8 = null;	
      this.ot.a_empresa8 = null;	
      this.ot.a_hora_inicial8 = null;	
      this.ot.a_hora_final8 = null;	
      this.ot.descripcion_breve8 = null;
    }
  }

  saveOt(){
    
    if(this.ot.fecha == null ){
      this.alertService.error("El campo Fecha es requerido");
      this.bandera=1;
    }else{
      this.ot.fecha=moment(this.ot.fecha).format('YYYY-MM-DD');
    }
    if(this.ot.folio == null ){
      this.alertService.error("El campo folio es requerido");
      this.bandera=1;
    }
    if(this.ot.manipulador == null ){
      this.alertService.error("Manipulador es requerido");
      this.bandera=1;
    }


    if(this.bandera == 1){
      this.alertService.error("Campos requeridos");
    }else{
      this.manipService.saveOT(this.ot).subscribe(data=>{
        if(data == 1){
          this.alertService.error("Este folio ya esta registrado");
        }else{
          this.alertService.presentToast('Actividad insertada correctamente');
          this.router.navigate(['/allottele']);
        }
      },error=>{
        this.alertService.error("Error al guardar");
      });
    }
    
    

  }


}//