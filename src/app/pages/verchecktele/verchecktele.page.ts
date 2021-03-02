import { Component, OnInit } from '@angular/core';
import { CheckManip } from '../../interfaces/checkmanip';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ManipuladorService } from 'src/app/services/manipulador.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-verchecktele',
  templateUrl: './verchecktele.page.html',
  styleUrls: ['./verchecktele.page.scss'],
})
export class VerchecktelePage implements OnInit {
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

  constructor(private activatedRoute: ActivatedRoute, private verificador: VerifinformacionService, 
    private authService: AuthService,  private alertservice: AlertService, private router: Router,
    private manipuladorService: ManipuladorService) { 

    this.id = this.activatedRoute.snapshot.params['id'];
      this.manipuladorService.editCheck(this.id).subscribe((data: CheckManip)=>{
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

  valido(){
    console.log(this.check.id);
    this.verificador.validarCheckTele(this.check.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/checkteleinfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
