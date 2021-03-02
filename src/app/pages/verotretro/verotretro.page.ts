import { Component, OnInit } from '@angular/core';

//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//IMPORTAR LA INTERFACE
import { OtRetro } from '../../interfaces/otretro';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { AuthService } from 'src/app/services/auth.service';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-verotretro',
  templateUrl: './verotretro.page.html',
  styleUrls: ['./verotretro.page.scss'],
})
export class VerotretroPage implements OnInit {

  ot: OtRetro={
    folio: null,
    retroexcavadora: null,	
    operador: null,
    num_trabajador: null,
    fecha: null,
    turno: '1',
    hora_inicial: null,
    ubicacion_inicial: null,
    horometro_inicial: null,
    horometro_final: null,
    ubicacion_final: null,
    hora_final: null,
    combustible: null,
    aceite_hidraulico: null,
    aceite_transmision: null,
    aceite_motor: null,
    codigo_operacion1: null,
    nivel1: null,
    lugar1: null,
    empresa1: null,
    hora_inicial1: null,
    hora_final1: null,
    horometro_inicial1: null,
    horometro_final1: null,
    breve_descripcion1: null,
    codigo_operacion2: null,
    nivel2: null,
    lugar2: null,
    empresa2: null,
    hora_inicial2: null,
    hora_final2: null,
    horometro_inicial2: null,
    horometro_final2: null,
    breve_descripcion2: null,
    codigo_operacion3: null,
    nivel3: null,
    lugar3: null,
    empresa3: null,
    hora_inicial3: null,
    hora_final3: null,
    horometro_inicial3: null,
    horometro_final3: null,
    breve_descripcion3: null,
    codigo_operacion4: null,
    nivel4: null,
    lugar4: null,
    empresa4: null,
    hora_inicial4: null,
    hora_final4: null,
    horometro_inicial4: null,
    horometro_final4: null,
    breve_descripcion4: null,
    codigo_operacion5: null,
    nivel5: null,
    lugar5: null,
    empresa5: null,
    hora_inicial5: null,
    hora_final5: null,
    horometro_inicial5: null,
    horometro_final5: null,
    breve_descripcion5: null,
    codigo_operacion6: null,
    nivel6: null,
    lugar6:null,
    empresa6: null,
    hora_inicial6: null,
    hora_final6: null,
    horometro_inicial6: null,
    horometro_final6: null,
    breve_descripcion6: null,
    codigo_operacion7:null,	
    nivel7: null,
    lugar7: null,
    empresa7: null,
    hora_inicial7: null,
    hora_final7: null,
    horometro_inicial7: null,
    horometro_final7: null,
    breve_descripcion7:null,
    codigo_operacion8:null,
    nivel8:null,
    lugar8:null,
    empresa8: null,
    hora_inicial8:null,	
    hora_final8: null,
    horometro_inicial8: null,
    horometro_final8: null,
    breve_descripcion8:null,	
    nombre_sup_avar: null,
    nombre_sup_contratista: null,
    permiso_edicion: null,
    revisado_valido: null,
  }
  id:any;
  usuario = {};

  constructor(private activateRoute: ActivatedRoute, private retroservice: RetroService, private router: Router,
    private authService: AuthService, private verificador: VerifinformacionService, private alertservice: AlertService) { 
    this.id = this.activateRoute.snapshot.params['id'];

      this.retroservice.editot(this.id).subscribe((data: OtRetro)=>{
        this.ot=data;
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
    this.verificador.validarOtRetro(this.ot.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/activretroinfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
