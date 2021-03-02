import { Component, OnInit } from '@angular/core';

import { CheckManip } from '../../interfaces/checkmanip';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { AlertService } from 'src/app/services/alert.service';
import { ManipuladorService } from 'src/app/services/manipulador.service';
import * as moment from 'moment';

@Component({
  selector: 'app-rchecktele',
  templateUrl: './rchecktele.page.html',
  styleUrls: ['./rchecktele.page.scss'],
})
export class RchecktelePage implements OnInit {
  
  manip$: Observable <any>;
  check: CheckManip={
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
    verificar_torreta: 'Si',	
    verificar_claxon: 'Si',
    freno_estacionamiento: 'Si',	
    freno_servicio: 'Si',	
    freno_parking: 'Si',	
    alarma_reversa: 'Si',	
    estado_asiento_cinturon: 'Si',	
    funcionamiento_estabilizadores: 'Si',	
    retraccion_extension_pluma: 'Si',	
    montaje_canastilla_cuchillas: 'Si',	
    luces_faros: 'Si',
    extintor_manual: 'Si',
    articulacion_ruedas: 'Si',	
    panel_control: 'Si',
    nivel_combustible: 'Si',	
    nivel_aceite_motor: 'Si',	
    nivel_aceite_hidraulico: 'Si',	
    nivel_aceite_transmision: 'Si',	
    nivel_anticongelante: 'Si',	
    nivel_mandos_finales: 'Si',	
    inspeccionar_golpes_equipo: 'Si',	
    indicador_serv_filtros_aire: 'Si',	
    sep_agua_sistema_combustible: 'Si',	
    tablero_instrumentos: 'Si',	
    revisar_engrasar_crucetas: 'Si',	
    fugas_aceite: 'Si',	
    terminales_direccion: 'Si',	
    presion_llantas: 'Si',	
    limpieza_equipo: 'Si',	
    bisagra_cierre_acceso: 'Si',	
    seguro_tope_bisagra: 'Si',	
    regilla_piso: 'Si',	
    fisuras_estructuras_soldadura: 'Si',	
    tuercas_abrazaderas: 'Si',	
    observaciones: null,	
    nombre_operador: null,	
    nombre_supervisor: null

  };
  
  usuario={};
  cont=1;
  bandera=0;

  constructor(private alertService: AlertService,
    private router:Router, private authService: AuthService, 
    private manipuladorService: ManipuladorService) { 

      this.manip$=this.manipuladorService.allmanip();

      this.authService.user().subscribe(
        user => {
          this.usuario = user;
          
          this.check['nombre_operador']=this.usuario['name'];
          this.check['num_empleado']=this.usuario['username'];
        }
      );
  }

  ngOnInit() {
  }

  optionsFn( event , $param){
    this.check[$param]=event.detail.value;
  }

  agregar(){
    if(this.cont < 2){
      this.cont=this.cont + 1;
    }
  }
  remover(){
    if(this.cont > 1){
      this.cont = this.cont - 1;
      this.check.codigo_parada2 = '';
      this.check.p_hora_inicio2='';
      this.check.p_hora_termino2='';
    }
  }

  saveCheck(){
    
    if(this.check.folio == null){
      this.alertService.error("El folio es requerido");
      this.bandera=1;
    }
    if(this.check.manipulador == null){
      this.alertService.error("Telehandler es requerido");
      this.bandera=1;
    }
    if(this.check.fecha == null){
      this.alertService.error("La fecha es requerida");
      this.bandera=1;
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');
    
    if(this.bandera == 1){
      this.alertService.error("Campo requerido");
    }else{
      this.manipuladorService.saveCheck(this.check).subscribe(data=>{
        if(data == 1){
          this.alertService.error("Este folio ya esta registrado");
        }else{
          this.alertService.presentToast('Check-list insertado');
          this.router.navigate(['/allchecktele']);
        }
      },error=>{
        this.alertService.error("Error al guardar");
      });   
    }

    



  }

  


}// FIN DE LA CLASE