import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Checkretro } from '../../interfaces/checkretro';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { AlertService } from 'src/app/services/alert.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editcheckr',
  templateUrl: './editcheckr.page.html',
  styleUrls: ['./editcheckr.page.scss'],
})
export class EditcheckrPage implements OnInit {
  
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
    frenos_servicios: null,
    freno_estacionario: null,
    extintor_manual: null,
    torreta: null,
    claxon: null,
    asiento_cinturon: null,
    alarma_reversera: null,
    luces_general: null,
    pluma_guarda: null,
    panel_control_jostick: null,
    estado_llantas: null,
    estado_estabilizadores: null,
    tornilleria_general: null,
    martillo_pica: null,
    nivel_aceite_motor: null,
    nivel_aceite_hidraulico: null,
    nivel_aceite_transmision: null,
    posibles_fugas: null,
    lubricacion_general: null,
    botiquin_primauxilios: null,
    conos_seguridad: null,
    kit_herramientas: null,
    limpieza_equipo: null,
    observaciones: null,
    nombre_operador: null,
    num_empleado: null,
    supervisor: null,
    permiso_edicion: null,
    revisado_valido: null,
  }
  array: Checkretro[];
  id:any;
  allr: Observable<any>;
  usuario={};
  cont=1;

  constructor(private activateRoute: ActivatedRoute, private retroservice: RetroService,
    private alertservice: AlertService, private router: Router, private authService: AuthService) { 
    this.id = this.activateRoute.snapshot.params['id'];
    this.allr=retroservice.getRetros();

    this.retroservice.editcheck(this.id).subscribe((data: Checkretro)=>{
      this.check=data;
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
      this.check.codigo_parada2 = null;
      this.check.p_hora_inicio2=null;
      this.check.p_hora_termino2=null;
    }
  }

  updateCheck(){
    
    if(this.check.folio == null){
      this.alertservice.error("El campo folio es requerido");
    }
    if(this.check.retroexcavadora == null){
      this.alertservice.error("Retroexcavadora es requerido");
    }
    if(this.check.fecha == null){
      this.alertservice.error("La fecha es requerida");
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');

    
    this.retroservice.updatecheck(this.check).subscribe(data=>{
      this.alertservice.presentToast('Check-list guardado');
      if(this.usuario['tuserint'] == 16 || this.usuario['tuserint'] == 24){
        this.router.navigate(['/checkretroinfo']);
      }else{
        this.router.navigate(['/allcheckr']);
      }
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
