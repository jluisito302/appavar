import { Component, OnInit } from '@angular/core';

import { CheckManip } from '../../interfaces/checkmanip';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { ManipuladorService } from 'src/app/services/manipulador.service';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-editchecktele',
  templateUrl: './editchecktele.page.html',
  styleUrls: ['./editchecktele.page.scss'],
})

export class EditchecktelePage implements OnInit {
  manip$: Observable <any>;
  check: CheckManip={
    id: null,
    folio: null,
    num_empleado: null,
    fecha: null,
    manipulador: null,
    codigo_parada1: null,	
    p_hora_inicio1: null,	
    p_hora_termino1: null,	
    p_litros1: null,	
    p_observaciones1: null,	
    codigo_parada2: null,	
    p_hora_inicio2: null,	
    p_hora_termino2: null,	
    p_litros2: null,	
    p_observaciones2: null,	
    verificar_torreta: null,	
    verificar_claxon: null,
    freno_estacionamiento: null,	
    freno_servicio: null,	
    freno_parking: null,	
    alarma_reversa: null,	
    estado_asiento_cinturon: null,	
    funcionamiento_estabilizadores: null,	
    retraccion_extension_pluma: null,	
    montaje_canastilla_cuchillas: null,	
    luces_faros: null,
    extintor_manual: null,
    articulacion_ruedas: null,	
    panel_control: null,
    nivel_combustible: null,	
    nivel_aceite_motor: null,	
    nivel_aceite_hidraulico: null,	
    nivel_aceite_transmision: null,	
    nivel_anticongelante: null,	
    nivel_mandos_finales: null,	
    inspeccionar_golpes_equipo: null,	
    indicador_serv_filtros_aire: null,	
    sep_agua_sistema_combustible: null,	
    tablero_instrumentos: null,	
    revisar_engrasar_crucetas: null,	
    fugas_aceite: null,	
    terminales_direccion: null,	
    presion_llantas: null,	
    limpieza_equipo: null,	
    bisagra_cierre_acceso: null,	
    seguro_tope_bisagra: null,	
    regilla_piso: null,	
    fisuras_estructuras_soldadura: null,	
    tuercas_abrazaderas: null,	
    observaciones: null,	
    nombre_operador: null,	
    nombre_supervisor: null

  };
  
  id: any;
  
  usuario={};
  constructor(private alertService: AlertService, private authService: AuthService,
    private router:Router, private manipuladorService: ManipuladorService, 
    private activatedRoute: ActivatedRoute) { 
      this.id = this.activatedRoute.snapshot.params['id'];
      this.manip$=this.manipuladorService.allmanip();

      this.manipuladorService.editCheck(this.id).subscribe((data: CheckManip)=>{
        this.check=data;
      },error=>{
        console.log(error);
      });
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
      }
    );
  }

  optionsFn( event , $param){
    this.check[$param]=event.detail.value;
  }

  updateCheck(){
    
    if(this.check.folio == null){
      this.alertService.error("El campo folio es requerido");
    }
    if(this.check.manipulador == null){
      this.alertService.error("Retroexcavadora es requerido");
    }
    if(this.check.fecha == null){
      this.alertService.error("La fecha es requerida");
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');


    this.manipuladorService.updatecheck(this.check).subscribe(data=>{
      this.alertService.presentToast('Check-list guarado');
      if(this.usuario['tuserint'] == 16 || this.usuario['tuserint'] == 24){
        this.router.navigate(['/checkteleinfo']);
      }else{
        this.router.navigate(['/allchecktele']);
      }
      
    },error=>{
      this.alertService.error("Error al guardar");
    });



  }

}
