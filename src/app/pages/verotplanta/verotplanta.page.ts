import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { PlantaconcretoService } from '../../services/plantaconcreto.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//IMPORTAR LA INTERFACE
import { OtPlanta } from '../../interfaces/otplanta';
import { AuthService } from 'src/app/services/auth.service';
import { VerifinformacionService } from '../../services/verifinformacion.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-verotplanta',
  templateUrl: './verotplanta.page.html',
  styleUrls: ['./verotplanta.page.scss'],
})
export class VerotplantaPage implements OnInit {
  id: any;

  cont: number = 1;
  usuario={};
  ot: OtPlanta={
    id: null,
    folio: null,	
    obra: null,
    area: null,	
    camion:  null,
    fecha: null,	
    nombre_operador: null,	
    num_trabajador: null,	
    consumo_diesel: null,	
    consumo_aceite_motor: null,	
    consumo_aceite_transmision: null,	
    consumo_aceite_hidraulico: null,
    turno: '1',	
    ubicacion_inicial: null,	
    kilometraje_i: null,	
    kilometraje_f: null,	
    ubicacion_final: null,	
    codigo_operacion: null,	
    nivel: null,	
    lugar: null,	
    empresa: null,	
    horainicial: null,	
    horafinal: null,	
    horometro_inicial1: null,	
    horometro_final1: null,	
    observaciones: null,	
    codigo_operacion2: null,	
    nivel2: null,	
    lugar2: null,	
    empresa2: null,	
    horainicial2: null,	
    horafinal2: null,	
    horometro_inicial2: null,	
    horometro_final2: null,	
    observaciones2: null,	
    codigo_operacion3: null,	
    nivel3: null,	
    lugar3: null,	
    empresa3: null,	
    horainicial3: null,	
    horafinal3: null,	
    horometro_inicial3: null,	
    horometro_final3: null,	
    observaciones3: null,	
    codigo_operacion4: null,	
    nivel4: null,	
    lugar4: null,	
    empresa4: null,	
    horainicial4: null,	
    horafinal4: null,
    horometro_inicial4: null,	
    horometro_final4: null,	
    observaciones4: null,	
    codigo_operacion5: null,	
    nivel5: null,	
    lugar5: null,	
    empresa5: null,	
    horainicial5: null,	
    horafinal5: null,	
    horometro_inicial5: null,	
    horometro_final5: null,	
    observaciones5: null,	
    codigo_operacion6: null,
    nivel6: null,	
    lugar6: null,	
    empresa6: null,	
    horainicial6: null,	
    horafinal6:  null,
    horometro_inicial6:  null,
    horometro_final6: null,	
    observaciones6: null,	
    codigo_operacion7: null,	
    nivel7: null,	
    lugar7: null,	
    empresa7: null,	
    horainicial7: null,	
    horafinal7: null,	
    horometro_inicial7: null,	
    horometro_final7: null,	
    observaciones7: null,	
    codigo_operacion8: null,	
    nivel8: null,	
    lugar8: null,	
    empresa8: null,	
    horainicial8: null,	
    horafinal8: null,	
    horometro_inicial8: null,	
    horometro_final8: null,	
    observaciones8: null,	
    ob_generales: null,
    nombre_supavar: null,	
    nombre_supcontratista: null,	
  }

  constructor(private activateRoute: ActivatedRoute, private router: Router,
     private plantaService: PlantaconcretoService, private alertservice: AlertService,
     private authService: AuthService, private verificador: VerifinformacionService) { 
    this.id = this.activateRoute.snapshot.params['id'];

    plantaService.editOt(this.id).subscribe((data: OtPlanta)=>{
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
    this.verificador.validarOtPlanta(this.ot.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/activplantainfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }

}
