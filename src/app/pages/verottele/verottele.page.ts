import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ManipuladorService } from 'src/app/services/manipulador.service';
import { OtManipulador } from '../../interfaces/otmanip';
import { AuthService } from 'src/app/services/auth.service';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verottele',
  templateUrl: './verottele.page.html',
  styleUrls: ['./verottele.page.scss'],
})
export class VerottelePage implements OnInit {
  allchecks: {};
  manip$:Observable<any>;
  usuario = {};
  id: any;
  ot: OtManipulador={
    folio: null,	
    manipulador: null,
    fecha: null,
    operador: null,	
    num_trabajador: null,	
    consumo_diesel: null,	
    consumo_aceite_motor: null,	
    consumo_aceite_transmision: null,	
    consumo_aceite_hidraulico:null,	
    turno: '1',
    hora_inicial: null,	
    hora_final: null,	
    ubicacion_inicial: null,	
    horom_inicial: null,
    horom_final: null,
    ubicacion_final: null,
    a_codigo_operacion1: null,
    a_nivel1: null,
    a_tajo1: null,
    a_labor1: null,
    a_empresa1: null,
    a_hora_inicial1: null,	
    a_hora_final1: null,	
    horometro_inicial1: null,
    horometro_final1: null,
    descripcion_breve1: null,	
    a_codigo_operacion2: null,	
    a_nivel2: null,	
    a_tajo2: null,	
    a_labor2: null,	
    a_empresa2: null,
    a_hora_inicial2:null,
    a_hora_final2:null,
    horometro_inicial2: null,
    horometro_final2: null,
    descripcion_breve2:null,
    a_codigo_operacion3:null,
    a_nivel3: null,
    a_tajo3: null,
    a_labor3: null,
    a_empresa3: null,
    a_hora_inicial3: null,
    a_hora_final3: null,
    horometro_inicial3: null,
    horometro_final3: null,
    descripcion_breve3: null,
    a_codigo_operacion4: null,
    a_nivel4: null,
    a_tajo4: null,
    a_labor4: null,
    a_empresa4: null,
    a_hora_inicial4: null,
    a_hora_final4: null,
    horometro_inicial4: null,
    horometro_final4: null,
    descripcion_breve4: null,
    a_codigo_operacion5: null,
    a_nivel5: null,
    a_tajo5: null,
    a_labor5: null,
    a_empresa5: null,
    a_hora_inicial5: null,
    a_hora_final5: null,
    horometro_inicial5: null,
    horometro_final5: null,
    descripcion_breve5: null,
    a_codigo_operacion6: null,
    a_nivel6: null,
    a_tajo6: null,
    a_labor6: null,
    a_empresa6: null,
    a_hora_inicial6: null,
    a_hora_final6: null,
    horometro_inicial6: null,
    horometro_final6: null,
    descripcion_breve6: null,
    a_codigo_operacion7: null,
    a_nivel7: null,
    a_tajo7: null,
    a_labor7: null,
    a_empresa7: null,
    a_hora_inicial7: null,
    a_hora_final7: null,
    horometro_inicial7: null,
    horometro_final7: null,
    descripcion_breve7: null,
    a_codigo_operacion8: null,
    a_nivel8: null,
    a_tajo8: null,
    a_labor8: null,
    a_empresa8: null,
    a_hora_inicial8: null,
    a_hora_final8: null,
    horometro_inicial8: null,
    horometro_final8: null,
    descripcion_breve8: null,
    nombre_supervisor_contratista: null,
    nombre_supervisor_cmc: null,
    revisado_valido: null,
    permiso_edicion: null
  }

  constructor(private manipService: ManipuladorService, private activateRoute: ActivatedRoute, private router: Router,
    private verificador: VerifinformacionService, private alertservice: AlertService, private authService: AuthService) { 
    this.manip$=this.manipService.allmanip();
    this.id = this.activateRoute.snapshot.params['id'];

    this.manipService.editOt(this.id).subscribe((data: OtManipulador)=>{
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
    this.verificador.validarOtTele(this.ot.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/activteleinfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}//
