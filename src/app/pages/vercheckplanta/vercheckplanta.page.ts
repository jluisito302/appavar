import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { CheckPlanta } from '../../interfaces/checkplanta';
//IMPORTAR EL SERVICIO
import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { VerifinformacionService } from '../../services/verifinformacion.service';

@Component({
  selector: 'app-vercheckplanta',
  templateUrl: './vercheckplanta.page.html',
  styleUrls: ['./vercheckplanta.page.scss'],
})
export class VercheckplantaPage implements OnInit {
  check: CheckPlanta={
    id: null,
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
  id: any;
  usuario={};

  constructor(private plantaService: PlantaconcretoService,
    private activatedRoute: ActivatedRoute, private authService: AuthService,
    private alertservice: AlertService, private router: Router, private verificador: VerifinformacionService) { 

      this.id = this.activatedRoute.snapshot.params['id'];
      
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


  valido(){
    console.log(this.check.id);
    this.verificador.validarCheckPlanta(this.check.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/checkplantainfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
