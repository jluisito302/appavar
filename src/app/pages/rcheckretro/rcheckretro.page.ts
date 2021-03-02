import { Component, OnInit } from '@angular/core';

// IMPORTADOS
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import { Checkretro } from '../../interfaces/checkretro';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { AlertService } from 'src/app/services/alert.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-rcheckretro',
  templateUrl: './rcheckretro.page.html',
  styleUrls: ['./rcheckretro.page.scss'],
})

export class RcheckretroPage implements OnInit {

  user: User;
  allr: Observable<any>;
  cont=1;
  bandera=0;
  usuario={};
  check: Checkretro={
    folio: null,
    fecha: null,
    retroexcavadora: null,
    codigo_parada: null,
    p_hora_inicio: null,
    p_hora_termino: null,
    codigo_parada2: null,
    p_hora_inicio2: null,
    p_hora_termino2: null,
    frenos_servicios: 'Si',
    freno_estacionario: 'Si',
    extintor_manual: 'Si',
    torreta: 'Si',
    claxon: 'Si',
    asiento_cinturon: 'Si',
    alarma_reversera: 'Si',
    luces_general: 'Si',
    pluma_guarda: 'Si',
    panel_control_jostick: 'Si',
    estado_llantas: 'Si',
    estado_estabilizadores: 'Si',
    tornilleria_general: 'Si',
    martillo_pica: 'Si',
    nivel_aceite_motor: 'Si',
    nivel_aceite_hidraulico: 'Si',
    nivel_aceite_transmision: 'Si',
    posibles_fugas: 'Si',
    lubricacion_general: 'Si',
    botiquin_primauxilios: 'Si',
    conos_seguridad: 'Si',
    kit_herramientas: 'Si',
    limpieza_equipo: 'Si',
    observaciones: null,
    nombre_operador: null,
    num_empleado: null,
    supervisor: null,
    permiso_edicion: null,
    revisado_valido: null,
  }

  constructor(private retroservice: RetroService, private alertservice: AlertService, 
    private router: Router, private authService: AuthService) {

    this.allr=retroservice.getRetros();

    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.check['nombre_operador']=this.usuario['name'];
        this.check['num_empleado']=this.usuario['username'];
      }
    );

  }// final del constructor

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

  ngOnInit() {
  }
  
  saveCheck(){
    
    if(this.check.folio == null){
      this.alertservice.error("El campo folio es requerido");
      this.bandera=1;
    }
    if(this.check.retroexcavadora == null){
      this.alertservice.error("Retroexcavadora es requerido");
      this.bandera=1;
    }
    if(this.check.fecha == null){
      this.alertservice.error("La fecha es requerida");
      this.bandera=1;
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');
    if(this.bandera == 1){
      this.alertservice.presentToast('Campo requerido');
    }else{
      this.retroservice.savecheck(this.check).subscribe(data=>{
        if(data == 1){
          this.alertservice.error('Este folio ya existente');
        }else{
          this.alertservice.presentToast('Check-list insertado');
          this.router.navigate(['/allcheckr']);
        }
      }, error=>{
        this.alertservice.error("Error al guardar");
      });
    }
    
   

  }
  

}// final de la clase
