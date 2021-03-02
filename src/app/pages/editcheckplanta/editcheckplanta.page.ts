import { Component, OnInit } from '@angular/core';

import { CheckPlanta } from '../../interfaces/checkplanta';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from 'src/app/services/alert.service';
import { PlantaconcretoService } from 'src/app/services/plantaconcreto.service';
import * as moment from 'moment';
import { User } from '../../interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editcheckplanta',
  templateUrl: './editcheckplanta.page.html',
  styleUrls: ['./editcheckplanta.page.scss'],
})
export class EditcheckplantaPage implements OnInit {
  check: CheckPlanta={
    folio: null,	
    fecha: null,	
    planta_concreto: null,	
    num_empleado: null,
    codigo_parada: null,	
    hora_inicio: null,	
    hora_termino: null,
    observaciones_p: null,	
    codigo_parada2: null,
    hora_inicio2: null,
    hora_termino2: null,
    observaciones_p2: null,	
    nivel_aceite_hidraulico:'Si',	
    nivel_aceite_motor: 'Si',	
    nivel_aceite_transmision: 'Si',	
    nivel_anticongelante: 'Si',	
    freno_pedal: 'Si',	
    freno_motor: 'Si',	
    freno_estacionario: 'Si',	
    presion_estado_neumaticos: 'Si',	
    parabrisas: 'Si',	
    e_bateria_conexiones: 'Si',	
    tablero_electrico: 'Si',	
    luces_delanteras_etc: 'Si',	
    luces_reversa: 'Si',	
    alarma_reversera: 'Si',	
    torreta: 'Si',	
    f_claxon: 'Si',	
    estado_asientos: 'Si',	
    cinturon_seguridad: 'Si',	
    extintor: 'Si',	
    botiquin: 'Si',
    calzas_seguridad: 'Si',	
    herramientas_basica: 'Si',	
    revision_muelles_bujes_perchas: 'Si',	
    engrasar_equipo: 'Si',	
    limpieza_general: 'Si',	
    tanque_aceite_hidraulico: 'Si',	
    aceite_hidraulico: 'Si',	
    enfriador_aceite_hidraulico: 'Si',	
    tolva_agregado_fino: 'Si',	
    tolva_agregado_grueso: 'Si',	
    tolva_hermetica_cemento: 'Si',	
    bomba_agua: 'Si',	
    deposito_agua: 'Si',	
    flujometro_control_agua: 'Si',	
    compuertas_dosificacion: 'Si',	
    banda_transp_agregado: 'Si',	
    mezclador_continuo: 'Si',	
    seguros_mezclador: 'Si',	
    guardas_mezclador: 'Si',	
    luces_trabajo: 'Si',	
    limpieza_equipo: 'Si',	
    observaciones_reverso: null,	
    nombre_operador: null,	
    nombre_supervisor: null,	
  }

  user: User;
  allP$: Observable<any>;
  id: any;
  usuario={};
  cont=1;

  constructor(private alertService: AlertService, private authService: AuthService,
    private router:Router, private plantaService: PlantaconcretoService,
    private activatedRoute: ActivatedRoute) { 

      this.id = this.activatedRoute.snapshot.params['id'];
      this.allP$=plantaService.getPlantas();

      this.plantaService.editcheck(this.id).subscribe((data: CheckPlanta)=>{
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

  agregar(){
    if(this.cont < 2){
      this.cont=this.cont + 1;
    }
  }
  remover(){
    if(this.cont > 1){
      this.cont = this.cont - 1;
      this.check.codigo_parada2 = '';
      this.check.hora_inicio2='';
      this.check.hora_termino2='';
      this.check.observaciones_p2='';
    }
  }

  updateCheck(){
    
    if(this.check.folio == null){
      this.alertService.error("El campo folio es requerido");
    }
    if(this.check.planta_concreto == null){
      this.alertService.error("Planta C. es requerido");
    }
    if(this.check.fecha == null){
      this.alertService.error("La fecha es requerida");
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');
    
    this.plantaService.updatecheck(this.check).subscribe(data=>{
      this.alertService.presentToast('Check-list guardado');

      if(this.usuario['tuserint'] == 16 || this.usuario['tuserint'] == 24){
        this.router.navigate(['/checkvinformacion']);
      }else{
        this.router.navigate(['/allcheckplanta']);
      }
      
      
    }, error=>{
      this.alertService.error("Error al guardar");
    });
  }

}
