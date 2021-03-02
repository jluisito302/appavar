import { Component, OnInit } from '@angular/core';
//IMPORTAR LA INTERFACE
import { Checkvehiculos } from '../../interfaces/checkvehiculos';
//IMPORTAR EL SERVICIO
import { RcheckvService } from '../../services/rcheckv.service';
//IMPORTATR EL ROUTER LINK
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../interfaces/user';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-rcheckv',
  templateUrl: './rcheckv.page.html',
  styleUrls: ['./rcheckv.page.scss'],
})
export class RcheckvPage implements OnInit {

  all: Observable<any>;
  check: Checkvehiculos ={
    fecha: null,
    folio: null,
    vehiculo: null,
    num_trabajador: null,
    placas: null,
    kilometraje: null,
    no_poliza: null,
    folio_t_circul: null,
    vigencia_seguro: null,
    vehiculo_presenta: '...',
    v_pdescripcion: null,
    luces: 'Si',
    espejo_laterales: 'Si',
    cristales: 'Si',
    parabrisas: 'Si',
    llantas: 'Si',
    tapon_ruedas: 'Si',
    molduras_complet: 'Si',
    tapon_combustible: 'Si',
    carroceria_s_golpes: 'Si',
    cable_pasa_corri: 'Si',
    calzas: 'Si',
    faros_reverseros: 'Si',
    estado_neumaticos: 'Si',
    alarma_reversa: 'Si',
    claxon: 'Si',
    instrum_tablero: 'Si',
    calefaccion: 'Si',
    limpia_parabrisas: 'Si',
    torreta: 'Si',
    encendedor: 'Si',
    espejo_retrovisor: 'Si',
    cinturon_seguridad: 'Si',
    conos_t_seguridad: 'Si',
    botones_interiores: 'Si',
    manijas_interiores: 'Si',
    tapetes: 'Si',
    vestiduras: 'Si',
    tarjeta_circulacion: 'Si',
    poliza_seguro: 'Si',
    aire_acondicionado: 'Si',
    gato_hidraulico: 'Si',
    maneral_gato: 'Si',
    llave_cruz: 'Si',
    estuche_herramient: 'Si',
    llanta_refaccion: 'Si',
    extintor: 'Si',
    tapon_aceite: 'Si',
    antenas_radio: 'Si',
    tapon_radiador: 'Si',
    bayoneta: 'Si',
    radio: 'Si',
    bateria: 'Si',
    botiquin: 'Si',
    limpieza_general: 'Si',
    bitacora_mant: 'Si',
    cantidad_combusti: 'Si',
    nombre_conductor: null,
    numero_licencia: null,
    tipo_licencia: null,
    vigencia_licencia: null,
    licencia_int_vig: '...',
    estado_lic_inter: null,
    coment_adicionales: null,
    trab_r_checklist: null,
    nombre_supervisor: null,
    created_at: null,
    update_at: null,
  }
  //inicializamos los users
  user: User;
  usuario={};
  bandera=0;

  constructor(private rcheckservice: RcheckvService,
     private activateRoute: ActivatedRoute, 
     private alertService: AlertService,
     private router:Router, private authService: AuthService) {
    this.all=this.rcheckservice.getVehiculos();
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        
        this.check['nombre_conductor']=this.usuario['name'];
        this.check['trab_r_checklist']=this.usuario['name'];
        this.check['num_trabajador']=this.usuario['username'];
      }
    );
  }
  
  ngOnInit() {
    
  }

  optionsFn( event , $param){
    this.check[$param]=event.detail.value;
  }
  
  saveCheck(){
    if(this.check.fecha == null){
      this.alertService.error("Fecha requerido");
      this.bandera=1;
    }
    if(this.check.folio == null){
      this.alertService.error("Folio requerido");
      this.bandera=1;
    }
    if(this.check.vehiculo == null){
      this.alertService.error("Vehiculo requerido");
      this.bandera=1;
    }

    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');
    this.check['vigencia_seguro']=moment(this.check['vigencia_seguro']).format('YYYY-MM-DD');
    this.check['vigencia_licencia']=moment(this.check['vigencia_licencia']).format('YYYY-MM-DD');
    //console.log('date', moment(this.check['fecha']).format('YYYY-MM-DD'));
    if(this.bandera == 1){
      this.alertService.error("Campo requerido");
    }else{
      this.rcheckservice.saveCheck(this.check).subscribe(data => {
        if(data == 1){
          this.alertService.error("Este folio ya existe");
        }else{
          this.alertService.presentToast("Check list insertado correctamente...");
          this.router.navigate(['/allcheckv']);
        }
      }, error => {
        console.log(error);
        this.alertService.error("Error al guardar");
      });
    }

    
  }

}//FINAL DE LA CLASE
