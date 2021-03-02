import { Component, OnInit } from '@angular/core';
//importar
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Checkvehiculos } from '../../interfaces/checkvehiculos';
import { RcheckvService } from '../../services/rcheckv.service';
import { AlertService } from 'src/app/services/alert.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editcheck',
  templateUrl: './editcheck.page.html',
  styleUrls: ['./editcheck.page.scss'],
})
export class EditcheckPage implements OnInit {

  id: any;
  editing: boolean = false;
  
  all: Observable<any>;
  checkss: {};
  array: Checkvehiculos[];
  check: Checkvehiculos ={
    id: null,
    fecha: null,
    folio: null,
    vehiculo: null,
    num_trabajador: null,
    placas: null,
    kilometraje: null,
    no_poliza: null,
    folio_t_circul: null,
    vigencia_seguro: null,
    vehiculo_presenta: null,
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
  };
  usuario={};


  constructor(private checkService: RcheckvService, 
    private activateRoute: ActivatedRoute, private authService: AuthService,
    private router:Router, private alertService: AlertService
    ) {

    this.id = this.activateRoute.snapshot.params['id'];
    
    this.all=this.checkService.getVehiculos();
    this.checkService.editcheck(this.id).subscribe((data: Checkvehiculos)=>{
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

  updateCheck(){
    //PARSEAR CON MOMENT
    this.check['fecha']=moment(this.check['fecha']).format('YYYY-MM-DD');
    this.check['vigencia_seguro']=moment(this.check['vigencia_seguro']).format('YYYY-MM-DD');
    this.check['vigencia_licencia']=moment(this.check['vigencia_licencia']).format('YYYY-MM-DD');

    this.checkService.update(this.check).subscribe(data=>{
      this.alertService.presentToast("Actualizado correctamente...");
        if(this.usuario['tuserint'] == 16 || this.usuario['tuserint'] == 24){
          this.router.navigate(['/checkvinformacion']);
        }else{
          this.router.navigate(['/allcheckv']);
        }
      },error=>{
        this.alertService.error("Ocurrio un error");
      });

  }

  
}
