import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
//IMPORTAR EL SERVICIO
import { CheckPlanta } from '../../interfaces/checkplanta';
import { AlertService } from 'src/app/services/alert.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PlantaconcretoService } from 'src/app/services/plantaconcreto.service';

@Component({
  selector: 'app-rcheckplanta',
  templateUrl: './rcheckplanta.page.html',
  styleUrls: ['./rcheckplanta.page.scss'],
})

export class RcheckplantaPage implements OnInit {

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
  cont=1;
  bandera=0;
  usuario={};

  constructor(private plantaService: PlantaconcretoService,
    private alertservice: AlertService, private router: Router, 
    private authService: AuthService) { 

    this.allP$=plantaService.getPlantas();

    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.check['nombre_operador']=this.usuario['name'];
        this.check['num_empleado']=this.usuario['username'];
      }
    );


  }

  optionsFn( event , $param){
    this.check[$param]=event.detail.value;
  }

  ngOnInit() {
  }

  agregar(){
    if(this.cont < 2){
      this.cont=this.cont + 1;
    }
  }
  remover(){
    if(this.cont > 1){
      this.cont = this.cont - 1;
    }
  }

  saveCheck(){
    
    if(this.check.folio == null){
      this.alertservice.error("El campo folio es requerido");
      this.bandera=1;
    }
    if(this.check.planta_concreto == null){
      this.alertservice.error("Planta C. es requerido");
      this.bandera=1;
    }
    if(this.check.fecha == null){
      this.alertservice.error("La fecha es requerida");
      this.bandera=1;
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');
    if(this.bandera == 1){
      this.alertservice.error("Campo requerido");
    }else{
      this.plantaService.savecheck(this.check).subscribe(data=>{
        if(data == 1){
          this.alertservice.error("El folio ya existe");
        }else{
          this.alertservice.presentToast('Check-list insertado');
          this.router.navigate(['/allcheckplanta']);
        }
      }, error=>{
        this.alertservice.error("Error al guardar");
      });
    }
    

  }
}// fin de la clase

