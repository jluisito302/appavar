import { Component, OnInit } from '@angular/core';
//IMPORTAR
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//IMPORTAR LA INTERFACE
import { OtRetro } from '../../interfaces/otretro';
//IMPORTAR EL SERVICIO
import { RetroService } from '../../services/retro.service';
import { AlertService } from 'src/app/services/alert.service';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editotret',
  templateUrl: './editotret.page.html',
  styleUrls: ['./editotret.page.scss'],
})
export class EditotretPage implements OnInit {
  id: any;
  allr: Observable<any>;
  usuario={};
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

  cont: number = 1;

  constructor(private activateRoute: ActivatedRoute, private retroservice: RetroService
    ,private alertService: AlertService, private router: Router, private authService: AuthService) { 
      this.allr=retroservice.getRetros();
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

  optionsFn( event , $param){
    this.ot[$param]=event.detail.value;
  }

  sumar(){
    if(this.cont <= 8){
      this.cont=this.cont+1;
    }
  }

  restar(){
    if(this.cont >= 2){
      this.cont=this.cont-1;
    }

    if(this.cont == 1){
      this.ot.codigo_operacion2 = null;
      this.ot.nivel2 = null;
      this.ot.lugar2 = null;	
      this.ot.empresa2 = null;	
      this.ot.hora_inicial2 = null;	
      this.ot.hora_final2 = null;	
      this.ot.horometro_inicial2 = null;
      this.ot.horometro_final2 = null;
      this.ot.breve_descripcion2 = null;	

      this.ot.codigo_operacion3 = null;
      this.ot.nivel3 = null;
      this.ot.lugar3 = null;	
      this.ot.empresa3 = null;	
      this.ot.hora_inicial3 = null;	
      this.ot.hora_final3 = null;	
      this.ot.horometro_inicial3 = null;
      this.ot.horometro_final3 = null;
      this.ot.breve_descripcion3 = null;

      this.ot.codigo_operacion4 = null;
      this.ot.nivel4 = null;
      this.ot.lugar4 = null;	
      this.ot.empresa4 = null;	
      this.ot.hora_inicial4 = null;	
      this.ot.hora_final4 = null;	
      this.ot.horometro_inicial4 = null;
      this.ot.horometro_final4 = null;
      this.ot.breve_descripcion4 = null;

      this.ot.codigo_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.horometro_inicial5 = null;
      this.ot.horometro_final5 = null;
      this.ot.breve_descripcion5 = null;

      this.ot.codigo_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.horometro_inicial6 = null;
      this.ot.horometro_final6 = null;
      this.ot.breve_descripcion6 = null;

      this.ot.codigo_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.horometro_inicial7 = null;
      this.ot.horometro_final7 = null;
      this.ot.breve_descripcion7 = null;

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }

    if(this.cont == 2){	

      this.ot.codigo_operacion3 = null;
      this.ot.nivel3 = null;
      this.ot.lugar3 = null;	
      this.ot.empresa3 = null;	
      this.ot.hora_inicial3 = null;	
      this.ot.hora_final3 = null;	
      this.ot.horometro_inicial3 = null;
      this.ot.horometro_final3 = null;
      this.ot.breve_descripcion3 = null;

      this.ot.codigo_operacion4 = null;
      this.ot.nivel4 = null;
      this.ot.lugar4 = null;	
      this.ot.empresa4 = null;	
      this.ot.hora_inicial4 = null;	
      this.ot.hora_final4 = null;	
      this.ot.horometro_inicial4 = null;
      this.ot.horometro_final4 = null;
      this.ot.breve_descripcion4 = null;

      this.ot.codigo_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.horometro_inicial5 = null;
      this.ot.horometro_final5 = null;
      this.ot.breve_descripcion5 = null;

      this.ot.codigo_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.horometro_inicial6 = null;
      this.ot.horometro_final6 = null;
      this.ot.breve_descripcion6 = null;

      this.ot.codigo_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.horometro_inicial7 = null;
      this.ot.horometro_final7 = null;
      this.ot.breve_descripcion7 = null;

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }

    if(this.cont == 3){	

      this.ot.codigo_operacion4 = null;
      this.ot.nivel4 = null;
      this.ot.lugar4 = null;	
      this.ot.empresa4 = null;	
      this.ot.hora_inicial4 = null;	
      this.ot.hora_final4 = null;	
      this.ot.horometro_inicial4 = null;
      this.ot.horometro_final4 = null;
      this.ot.breve_descripcion4 = null;

      this.ot.codigo_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.horometro_inicial5 = null;
      this.ot.horometro_final5 = null;
      this.ot.breve_descripcion5 = null;

      this.ot.codigo_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.horometro_inicial6 = null;
      this.ot.horometro_final6 = null;
      this.ot.breve_descripcion6 = null;

      this.ot.codigo_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.horometro_inicial7 = null;
      this.ot.horometro_final7 = null;
      this.ot.breve_descripcion7 = null;

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }

    if(this.cont == 4){	

      this.ot.codigo_operacion5 = null;
      this.ot.nivel5 = null;
      this.ot.lugar5 = null;	
      this.ot.empresa5 = null;	
      this.ot.hora_inicial5 = null;	
      this.ot.hora_final5 = null;	
      this.ot.horometro_inicial5 = null;
      this.ot.horometro_final5 = null;
      this.ot.breve_descripcion5 = null;

      this.ot.codigo_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.horometro_inicial6 = null;
      this.ot.horometro_final6 = null;
      this.ot.breve_descripcion6 = null;

      this.ot.codigo_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.horometro_inicial7 = null;
      this.ot.horometro_final7 = null;
      this.ot.breve_descripcion7 = null;

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }

    if(this.cont == 5){	

      this.ot.codigo_operacion6 = null;
      this.ot.nivel6 = null;
      this.ot.lugar6 = null;	
      this.ot.empresa6 = null;	
      this.ot.hora_inicial6 = null;	
      this.ot.hora_final6 = null;	
      this.ot.horometro_inicial6 = null;
      this.ot.horometro_final6 = null;
      this.ot.breve_descripcion6 = null;

      this.ot.codigo_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.horometro_inicial7 = null;
      this.ot.horometro_final7 = null;
      this.ot.breve_descripcion7 = null;

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }

    if(this.cont == 6){	

      this.ot.codigo_operacion7 = null;
      this.ot.nivel7 = null;
      this.ot.lugar7 = null;	
      this.ot.empresa7 = null;	
      this.ot.hora_inicial7 = null;	
      this.ot.hora_final7 = null;	
      this.ot.horometro_inicial7 = null;
      this.ot.horometro_final7 = null;
      this.ot.breve_descripcion7 = null;

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }

    if(this.cont == 7){	

      this.ot.codigo_operacion8 = null;
      this.ot.nivel8 = null;
      this.ot.lugar8 = null;	
      this.ot.empresa8 = null;	
      this.ot.hora_inicial8 = null;	
      this.ot.hora_final8 = null;	
      this.ot.horometro_inicial8 = null;
      this.ot.horometro_final8 = null;
      this.ot.breve_descripcion8 = null;
    }
  }

  updateOT(){
    if(this.ot.nombre_sup_avar == null){
      this.alertService.error("Supervisor requerido");
    }
    if(this.ot.nombre_sup_contratista == null){
      this.alertService.error("Supervisor requerido");
    }
    if(this.ot.folio == null){
      this.alertService.error("Supervisor requerido");
    }

    
    this.retroservice.updateot(this.ot).subscribe(data=>{
      this.alertService.presentToast('OT guardada correctamente');
      
      if(this.usuario['tuserint'] == 11){
        this.router.navigate(['/allotretro']);
      }else{
        this.router.navigate(['/activretroinfo']);
      }
    }, error=>{
      this.alertService.error("Error al guardar");
    });




  }

}
