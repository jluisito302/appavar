import { Component, OnInit } from '@angular/core';
//IMPORTAR EL SERVICIO
import { ObraService } from '../../services/obra.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { OtAlbanileria } from '../../interfaces/otalbanileria';
import { ActivatedRoute } from '@angular/router';
import { VerifinformacionService } from '../../services/verifinformacion.service';

@Component({
  selector: 'app-verotobra',
  templateUrl: './verotobra.page.html',
  styleUrls: ['./verotobra.page.scss'],
})
export class VerotobraPage implements OnInit {
  ot: OtAlbanileria={
    id: null,
    folio: null,	
    fecha: null,	
    nombre_empleado: null,	
    num_empleado: null,
    nombre_obra: null,	
    area: null, 	
    turno: '1',	
    nombre_personal1: null,	
    nombre_personal2: null,	
    nombre_personal3: null,	
    nombre_personal4: null,	
    nombre_personal5: null,	
    nombre_personal6: null,	
    nombre_personal7: null,	
    nombre_personal8: null,	
    nombre_personal9: null,	
    nombre_personal10: null,	
    nombre_personal11: null,	
    nombre_personal12: null,	
    horario1: null,	
    horario2: null,	
    horario3: null,	
    horario4: null,	
    horario5: null,	
    horario6: null,	
    horario7: null,	
    horario8: null,	
    horario9: null,	
    horario10: null,	
    horario11: null,	
    horario12: null,	
    horariofinal1: null,
    horariofinal2: null,
    horariofinal3: null,
    horariofinal4: null,
    horariofinal5: null,
    horariofinal6: null,
    horariofinal7: null,
    horariofinal8: null,
    horariofinal9: null,
    horariofinal10: null,
    horariofinal11: null,
    horariofinal12: null,
    trabajo_realizado: null,	
    id_material1: null,	
    id_material2: null,	
    id_material3: null,	
    id_material4: null,	
    id_material5: null,	
    id_material6: null,	
    descripcion_material1: null,	
    descripcion_material2: null,	
    descripcion_material3: null,	
    descripcion_material4: null,	
    descripcion_material5: null,	
    descripcion_material6: null,	
    solicitado1: null,	
    solicitado2: null,	
    solicitado3: null,	
    solicitado4: null,	
    solicitado5: null,	
    solicitado6: null,	
    sobrante1: null,	
    sobrante2: null,	
    sobrante3: null,	
    sobrante4: null,	
    sobrante5: null,	
    sobrante6: null,	
    ocupado1: null,	
    ocupado2: null,	
    ocupado3: null,	
    ocupado4: null,	
    ocupado5: null,	
    ocupado6: null,	
    hme1: null,	
    hme2: null,	
    hme3: null,	
    hme4: null,	
    tipo1: null,
    tipo2: null,
    tipo3: null,
    tipo4: null,
    cantidad1: null,	
    cantidad2: null,	
    cantidad3: null,	
    cantidad4: null,	
    medidas: null,	
    avance_dia: null,	
    observaciones: null,	
    fotografia: null,	
  }
  id: any;
  usuario={};

  constructor(private obraService: ObraService, private activateRoute: ActivatedRoute, 
    private alertservice: AlertService, private authService: AuthService, private router: Router,
    private verificador: VerifinformacionService) { 

    this.id = this.activateRoute.snapshot.params['id'];
      //BUSCAMOS EN EL SERVER EL ID DE LA OBRA
      this.obraService.editar(this.id).subscribe(data=>{
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
    this.verificador.validarOtObras(this.ot.id).subscribe(data=>{
      this.alertservice.presentToast('Guardado como válido');
      this.router.navigate(['/activobrainfo']);
    }, error=>{
      this.alertservice.error("Error al guardar");
    });
  }



}
