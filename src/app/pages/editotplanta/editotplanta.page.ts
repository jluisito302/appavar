import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
//IMPORTAR LA INTERFACE
import { OtPlanta } from '../../interfaces/otplanta';
//IMPORTAR EL SERVICIO
import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-editotplanta',
  templateUrl: './editotplanta.page.html',
  styleUrls: ['./editotplanta.page.scss'],
})
export class EditotplantaPage implements OnInit {
  id: any;
  allp: Observable<any>;
  usuario={};

  cont: number = 1;

  ot: OtPlanta={
    id: null,
    folio: null,	
    obra: null,
    area: null,	
    camion:  null,
    fecha: null,	
    nombre_operador: null,	
    num_trabajador: null,	
    consumo_diesel: null,	
    consumo_aceite_motor: null,	
    consumo_aceite_transmision: null,	
    consumo_aceite_hidraulico: null,
    turno: '1',	
    ubicacion_inicial: null,	
    kilometraje_i: null,	
    kilometraje_f: null,	
    ubicacion_final: null,	
    codigo_operacion: null,	
    nivel: null,	
    lugar: null,	
    empresa: null,	
    horainicial: null,	
    horafinal: null,	
    horometro_inicial1: null,	
    horometro_final1: null,	
    observaciones: null,	
    codigo_operacion2: null,	
    nivel2: null,	
    lugar2: null,	
    empresa2: null,	
    horainicial2: null,	
    horafinal2: null,	
    horometro_inicial2: null,	
    horometro_final2: null,	
    observaciones2: null,	
    codigo_operacion3: null,	
    nivel3: null,	
    lugar3: null,	
    empresa3: null,	
    horainicial3: null,	
    horafinal3: null,	
    horometro_inicial3: null,	
    horometro_final3: null,	
    observaciones3: null,	
    codigo_operacion4: null,	
    nivel4: null,	
    lugar4: null,	
    empresa4: null,	
    horainicial4: null,	
    horafinal4: null,
    horometro_inicial4: null,	
    horometro_final4: null,	
    observaciones4: null,	
    codigo_operacion5: null,	
    nivel5: null,	
    lugar5: null,	
    empresa5: null,	
    horainicial5: null,	
    horafinal5: null,	
    horometro_inicial5: null,	
    horometro_final5: null,	
    observaciones5: null,	
    codigo_operacion6: null,
    nivel6: null,	
    lugar6: null,	
    empresa6: null,	
    horainicial6: null,	
    horafinal6:  null,
    horometro_inicial6:  null,
    horometro_final6: null,	
    observaciones6: null,	
    codigo_operacion7: null,	
    nivel7: null,	
    lugar7: null,	
    empresa7: null,	
    horainicial7: null,	
    horafinal7: null,	
    horometro_inicial7: null,	
    horometro_final7: null,	
    observaciones7: null,	
    codigo_operacion8: null,	
    nivel8: null,	
    lugar8: null,	
    empresa8: null,	
    horainicial8: null,	
    horafinal8: null,	
    horometro_inicial8: null,	
    horometro_final8: null,	
    observaciones8: null,	
    ob_generales: null,
    nombre_supavar: null,	
    nombre_supcontratista: null,	
  }

  constructor(private activateRoute: ActivatedRoute,
    private alertService: AlertService, private router: Router,
     private plantaService: PlantaconcretoService) { 
    this.id = this.activateRoute.snapshot.params['id'];

    this.allp=plantaService.getPlantas();

    plantaService.editOt(this.id).subscribe((data: OtPlanta)=>{
      this.ot=data;
    });

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
      this.ot.horainicial2 = '';	
      this.ot.horafinal2 = '';	
      this.ot.horometro_inicial2 = '';
      this.ot.horometro_final2 = '';
      this.ot.observaciones2 = '';	

      this.ot.codigo_operacion3 = '';
      this.ot.nivel3 = '';
      this.ot.lugar3 = '';	
      this.ot.empresa3 = '';	
      this.ot.horainicial3 = '';	
      this.ot.horafinal3 = '';	
      this.ot.horometro_inicial3 = '';
      this.ot.horometro_final3 = '';
      this.ot.observaciones3 = '';

      this.ot.codigo_operacion4 = '';
      this.ot.nivel4 = '';
      this.ot.lugar4 = '';	
      this.ot.empresa4 = '';	
      this.ot.horainicial4 = '';	
      this.ot.horafinal4 = '';	
      this.ot.horometro_inicial4 = '';
      this.ot.horometro_final4 = '';
      this.ot.observaciones4 = '';

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.horainicial5 = '';	
      this.ot.horafinal5 = '';	
      this.ot.horometro_inicial5 = '';
      this.ot.horometro_final5 = '';
      this.ot.observaciones5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.horainicial6 = '';	
      this.ot.horafinal6 = '';	
      this.ot.horometro_inicial6 = '';
      this.ot.horometro_final6 = '';
      this.ot.observaciones6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.horainicial7 = '';	
      this.ot.horafinal7 = '';	
      this.ot.horometro_inicial7 = '';
      this.ot.horometro_final7 = '';
      this.ot.observaciones7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones = '';
    }

    if(this.cont == 2){	

      this.ot.codigo_operacion3 = '';
      this.ot.nivel3 = '';
      this.ot.lugar3 = '';	
      this.ot.empresa3 = '';	
      this.ot.horainicial3 = '';	
      this.ot.horafinal3 = '';	
      this.ot.horometro_inicial3 = '';
      this.ot.horometro_final3 = '';
      this.ot.observaciones3 = '';

      this.ot.codigo_operacion4 = '';
      this.ot.nivel4 = '';
      this.ot.lugar4 = '';	
      this.ot.empresa4 = '';	
      this.ot.horainicial4 = '';	
      this.ot.horafinal4 = '';	
      this.ot.horometro_inicial4 = '';
      this.ot.horometro_final4 = '';
      this.ot.observaciones4 = '';

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.horainicial5 = '';	
      this.ot.horafinal5 = '';	
      this.ot.horometro_inicial5 = '';
      this.ot.horometro_final5 = '';
      this.ot.observaciones5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.horainicial6 = '';	
      this.ot.horafinal6 = '';	
      this.ot.horometro_inicial6 = '';
      this.ot.horometro_final6 = '';
      this.ot.observaciones = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.horainicial7 = '';	
      this.ot.horafinal7 = '';	
      this.ot.horometro_inicial7 = '';
      this.ot.horometro_final7 = '';
      this.ot.observaciones = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones = '';
    }

    if(this.cont == 3){	

      this.ot.codigo_operacion4 = '';
      this.ot.nivel4 = '';
      this.ot.lugar4 = '';	
      this.ot.empresa4 = '';	
      this.ot.horainicial4 = '';	
      this.ot.horafinal4 = '';	
      this.ot.horometro_inicial4 = '';
      this.ot.horometro_final4 = '';
      this.ot.observaciones4 = '';

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.horainicial5 = '';	
      this.ot.horafinal5 = '';	
      this.ot.horometro_inicial5 = '';
      this.ot.horometro_final5 = '';
      this.ot.observaciones5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.horainicial6 = '';	
      this.ot.horafinal6 = '';	
      this.ot.horometro_inicial6 = '';
      this.ot.horometro_final6 = '';
      this.ot.observaciones6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.horainicial7 = '';	
      this.ot.horafinal7 = '';	
      this.ot.horometro_inicial7 = '';
      this.ot.horometro_final7 = '';
      this.ot.observaciones7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones8 = '';
    }

    if(this.cont == 4){	

      this.ot.codigo_operacion5 = '';
      this.ot.nivel5 = '';
      this.ot.lugar5 = '';	
      this.ot.empresa5 = '';	
      this.ot.horainicial5 = '';	
      this.ot.horafinal5 = '';	
      this.ot.horometro_inicial5 = '';
      this.ot.horometro_final5 = '';
      this.ot.observaciones5 = '';

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.horainicial6 = '';	
      this.ot.horafinal6 = '';	
      this.ot.horometro_inicial6 = '';
      this.ot.horometro_final6 = '';
      this.ot.observaciones6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.horainicial7 = '';	
      this.ot.horafinal7 = '';	
      this.ot.horometro_inicial7 = '';
      this.ot.horometro_final7 = '';
      this.ot.observaciones7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones8 = '';
    }

    if(this.cont == 5){	

      this.ot.codigo_operacion6 = '';
      this.ot.nivel6 = '';
      this.ot.lugar6 = '';	
      this.ot.empresa6 = '';	
      this.ot.horainicial6 = '';	
      this.ot.horafinal6 = '';	
      this.ot.horometro_inicial6 = '';
      this.ot.horometro_final6 = '';
      this.ot.observaciones6 = '';

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.horainicial7 = '';	
      this.ot.horafinal7 = '';	
      this.ot.horometro_inicial7 = '';
      this.ot.horometro_final7 = '';
      this.ot.observaciones7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones8 = '';
    }

    if(this.cont == 6){	

      this.ot.codigo_operacion7 = '';
      this.ot.nivel7 = '';
      this.ot.lugar7 = '';	
      this.ot.empresa7 = '';	
      this.ot.horainicial7 = '';	
      this.ot.horafinal7 = '';	
      this.ot.horometro_inicial7 = '';
      this.ot.horometro_final7 = '';
      this.ot.observaciones7 = '';

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones8 = '';
    }

    if(this.cont == 7){	

      this.ot.codigo_operacion8 = '';
      this.ot.nivel8 = '';
      this.ot.lugar8 = '';	
      this.ot.empresa8 = '';	
      this.ot.horainicial8 = '';	
      this.ot.horafinal8 = '';	
      this.ot.horometro_inicial8 = '';
      this.ot.horometro_final8 = '';
      this.ot.observaciones8 = '';
    }
  }

  optionsFn( event , $param){
    this.ot[$param]=event.detail.value;
  }

  updateOT(){
    //  SI FALTAN LAS FECHAS
    if(this.ot.fecha == null ){
      this.alertService.error("El campo Fecha es requerido");
    }else{
      this.ot.fecha=moment(this.ot.fecha).format('YYYY-MM-DD');
    }

    if(this.ot.horainicial == null){
      this.alertService.error("Hora de inicial es requerido");
    }

    if(this.ot.horafinal == null){
      this.alertService.error("Hora final es requerido");
    }

    
    if(this.ot.nombre_supavar == null){
      this.alertService.error("Supervisor requerido");
    }
    if(this.ot.nombre_supcontratista == null){
      this.alertService.error("Supervisor requerido");
    }

    this.plantaService.updateOt(this.ot).subscribe(data=>{
      this.alertService.presentToast('OT insertado correctamente');
      this.router.navigate(['/dashboard']);
    }, error=>{
      this.alertService.error("Error al guardar");
    });
  }

}
