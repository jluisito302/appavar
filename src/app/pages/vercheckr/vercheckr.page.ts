import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Checkretro } from '../../interfaces/checkretro';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { AuthService } from 'src/app/services/auth.service';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-vercheckr',
  templateUrl: './vercheckr.page.html',
  styleUrls: ['./vercheckr.page.scss'],
})
export class VercheckrPage implements OnInit {

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
  array: Checkretro[];
  id:any;
  usuario={};

  constructor(private activateRoute: ActivatedRoute, private retroservice: RetroService,
     private verificador: VerifinformacionService, private authService: AuthService, 
     private alertservice: AlertService, private router: Router) { 
    this.id = this.activateRoute.snapshot.params['id'];

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

  valido(){
    console.log(this.check.id);
    this.verificador.getValidarCRetro(this.check.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/checkretroinfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
