import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { RcheckvService } from '../../services/rcheckv.service';
import { Observable } from 'rxjs';
//IMPORTAR LA INTERFACE
import { OtVehiculos } from '../../interfaces/otvehiculos';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { VerifinformacionService } from '../../services/verifinformacion.service';

@Component({
  selector: 'app-verotv',
  templateUrl: './verotv.page.html',
  styleUrls: ['./verotv.page.scss'],
})
export class VerotvPage implements OnInit {

  id: any;
  observ$:Observable <any>;
  array: OtVehiculos[];
  usuario={};
  ot: OtVehiculos ={
    folio: null,
    vehiculo: null,
    conductor: null,
    num_empleado: null,	
    fecha: null,	
    turno: '1',	
    d_hora_inicial: null,	
    d_ubicacion_ini: null,	
    kilometraje_ini: null,	
    kilometraje_final: null,	
    ubicacion_final: null,
    d_hora_final: null,	
    combustible: null,	
    aceite_hidraulico: null,	
    aceite_transmision: null,	
    aceite_motor: null,	
    cod_operacion1: null,	
    nivel1: null,	
    lugar1: null,	
    empresa1: null,	
    hora_inicial1: null,	
    hora_final1: null,	
    horometro_inicial1: null,
    horometro_final1: null,
    b_descripcion1: null,	
    cod_operacion2: null,	
    nivel2: null,	
    lugar2: null,	
    empresa2: null,	
    hora_inicial2: null,	
    hora_final2: null,	
    horometro_inicial2: null,
    horometro_final2: null,
    b_descripcion2: null,	
    cod_operacion3: null,	
    nivel3: null,
    lugar3: null,	
    empresa3: null,	
    hora_inicial3: null,	
    hora_final3: null,	
    horometro_inicial3: null,
    horometro_final3: null,
    b_descripcion3: null,	
    cod_operacion4: null,	
    nivel4: null,	
    lugar4: null,	
    empresa4: null,	
    hora_inicial4: null,	
    hora_final4: null,	
    horometro_inicial4: null,
    horometro_final4: null,
    b_descripcion4: null,	
    cod_operacion5: null,	
    nivel5: null,	
    lugar5: null,	
    empresa5: null,	
    hora_inicial5: null,	
    hora_final5: null,	
    horometro_inicial5: null,
    horometro_final5: null,
    b_descripcion5: null,	
    cod_operacion6: null,	
    nivel6: null,	
    lugar6: null,	
    empresa6: null,	
    hora_inicial6: null,	
    hora_final6: null,	
    horometro_inicial6: null,
    horometro_final6: null,
    b_descripcion6: null,	
    cod_operacion7: null,	
    nivel7: null,	
    lugar7: null,	
    empresa7: null,	
    hora_inicial7: null,	
    hora_final7: null,	
    horometro_inicial7: null,
    horometro_final7: null,
    b_descripcion7: null,	
    cod_operacion8: null,	
    nivel8: null,	
    lugar8: null,	
    empresa8: null,
    hora_inicial8: null,	
    hora_final8: null,	
    horometro_inicial8: null,
    horometro_final8: null,
    b_descripcion8: null,
    observaciones:null,	
    nombre_operador1: null,	
    nombre_sup_avar: null,	
    nombre_contratista: null,	
    falla_mecanica: null,	
    falla_electrica: null,	
    danos_equipo: null,
    caida_roca: null,	
    golpe_choque: null,	
    obstruccion_via: null,	
    vent_deficiente: null,	
    mant_rampa: null,	
    permiso_edicion: null,	
    revisado_valido: null,
  }

  constructor(private checkService: RcheckvService, private authService: AuthService, 
    private router: Router, private alertservice: AlertService, private activateRoute: ActivatedRoute,
    private verificador: VerifinformacionService) { 

      this.id = this.activateRoute.snapshot.params['id'];

      this.checkService.editot(this.id).subscribe((data: OtVehiculos[])=>{
        this.array=data;
        this.ot=this.array.find(c=>{
          return c.id == this.id;
        });
      });

  }

  ngOnInit() {
    this.authService.user().subscribe(
      user => {
        this.usuario = user;
      }
    );
  }

  //FUNCION PARA VALIDAR EL CHECK LIST
  valido(){
    console.log(this.ot.id);
    this.verificador.validarOtVehi(this.ot.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/checkvinformacion']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
