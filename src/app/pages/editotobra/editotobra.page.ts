import { Component, OnInit } from '@angular/core';
//
import { ObraService } from '../../services/obra.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';
import { OtAlbanileria } from '../../interfaces/otalbanileria';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editotobra',
  templateUrl: './editotobra.page.html',
  styleUrls: ['./editotobra.page.scss'],
})
export class EditotobraPage implements OnInit {
  usuario: {};
  contPersonal=1;
  contMaterial=1;

  maquinaria$: Observable <any>;
  equipos$: Observable <any>;
  personal$: Observable <any>;
  materiales1$: Observable <any>;
  materiales2$: Observable <any>;
  materiales3$: Observable <any>;
  materiales4$: Observable <any>;
  materiales5$: Observable <any>;
  materiales6$: Observable <any>;

  obras$: Observable <any>

  buscarM='';
  buscarM2='';
  buscarM3='';
  buscarM4='';
  buscarM5='';
  buscarM6='';
  //DE QUE TIPO DE SELECT VA A SER
  tipohme='';
  tipohme2='';
  tipohme3='';
  tipohme4='';
  //CONTADORES DE EQUIPOS MAQUINARIAS Y HERRAMIENTAS
  conthme=1;
  contherram=0;
  contequipo=0;
  id: any;
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

  constructor(private obraService: ObraService, private activateRoute: ActivatedRoute,
    private alertService: AlertService, private router: Router, 
    private authService: AuthService) { 
      this.id = this.activateRoute.snapshot.params['id'];
      //BUSCAMOS EN EL SERVER EL ID DE LA OBRA
      this.obraService.editar(this.id).subscribe(data=>{
        this.ot=data;
      });

      this.materiales1$=this.obraService.getMateriales();
      this.materiales2$=this.materiales1$;
      this.materiales3$=this.materiales1$;
      this.materiales4$=this.materiales1$;
      this.materiales5$=this.materiales1$;
      this.materiales6$=this.materiales1$;
      this.personal$=this.obraService.getPersonal();

      this.maquinaria$=this.obraService.getMaquinaria();
      this.equipos$=this.obraService.getEquipos();

      this.obras$=this.obraService.getObras();
      
      this.authService.user().subscribe(
        user => {
          this.usuario = user;
        }
      );
  }

  ngOnInit() {
  }

  onSearchChange(event){
    this.buscarM=event.detail.value;
  }

  onSearchChange2(event){
    this.buscarM2=event.detail.value;
  }
  onSearchChange3(event){
    this.buscarM3=event.detail.value;
  }
  onSearchChange4(event){
    this.buscarM4=event.detail.value;
  }
  onSearchChange5(event){
    this.buscarM5=event.detail.value;
  }
  onSearchChange6(event){
    this.buscarM6=event.detail.value;
  }
  
  optionsFn( event , $param){
    this.ot[$param]=event.detail.value;
  }
  
  //PARA PONERLE EL TIPO DE CADA HME
  tipo(event){
   this.tipohme=event.detail.value;
   this.ot.tipo1=this.tipohme;
  }
  tipo2(event){
    this.tipohme2=event.detail.value;
    this.ot.tipo2=this.tipohme2;
  }
  tipo3(event){
    this.tipohme3=event.detail.value;
    this.ot.tipo3=this.tipohme3;
  }
  tipo4(event){
    this.tipohme4=event.detail.value;
    this.ot.tipo4=this.tipohme4;
  }

  aherram(){

  }
  aequipo(){

  }
  ahme(){
    if(this.conthme < 4){
      this.conthme= this.conthme +1;
    }
    console.log(this.conthme);
  }
  qhme(){
    if(this.conthme >= 1){
      this.conthme= this.conthme-1;
      console.log(this.conthme);
    }
    
  }

  agregarPersonal(){
    if(this.contPersonal <= 12){
      this.contPersonal++;
    }
  }

  quitarPersonal(){
    if(this.contPersonal > 1){
      this.contPersonal=this.contPersonal - 1;
      if(this.contPersonal == 1){
        this.ot.nombre_personal2=null;
        this.ot.horario2=null;
      }
      if(this.contPersonal == 2){
        this.ot.nombre_personal3=null;
        this.ot.horario3=null;
      }
      if(this.contPersonal == 3){
        this.ot.nombre_personal4=null;
        this.ot.horario4=null;
      }
      if(this.contPersonal == 4){
        this.ot.nombre_personal5=null;
        this.ot.horario5=null;
      }
      if(this.contPersonal == 5){
        this.ot.nombre_personal6=null;
        this.ot.horario6=null;
      }
      if(this.contPersonal == 6){
        this.ot.nombre_personal7=null;
        this.ot.horario7=null;
      }
      if(this.contPersonal == 7){
        this.ot.nombre_personal8=null;
        this.ot.horario8=null;
      }
      if(this.contPersonal == 8){
        this.ot.nombre_personal9=null;
        this.ot.horario9=null;
      }
      if(this.contPersonal == 9){
        this.ot.nombre_personal10=null;
        this.ot.horario10=null;
      }
      if(this.contPersonal == 10){
        this.ot.nombre_personal11=null;
        this.ot.horario11=null;
      }
      if(this.contPersonal == 11){
        this.ot.nombre_personal12=null;
        this.ot.horario12=null;
      }


    }
  }

  agregarMaterial(){
    if(this.contMaterial < 7){
      this.contMaterial++;
    }
  }

  quitarMaterial(){
    if(this.contMaterial > 1){
      this.contMaterial=this.contMaterial-1;
      if(this.contMaterial == 1){
        this.ot.descripcion_material2=null;
        this.ot.solicitado2=null;
        this.ot.sobrante2=null;
        this.ot.ocupado2=null;
      }
      if(this.contMaterial == 2){
        this.ot.descripcion_material3=null;
        this.ot.solicitado3=null;
        this.ot.sobrante3=null;
        this.ot.ocupado3=null;
      }
      if(this.contMaterial == 3){
        this.ot.descripcion_material4=null;
        this.ot.solicitado4=null;
        this.ot.sobrante4=null;
        this.ot.ocupado4=null;
      }
      if(this.contMaterial == 4){
        this.ot.descripcion_material5=null;
        this.ot.solicitado5=null;
        this.ot.sobrante5=null;
        this.ot.ocupado5=null;
      }
      if(this.contMaterial == 5){
        this.ot.descripcion_material6=null;
        this.ot.solicitado6=null;
        this.ot.sobrante6=null;
        this.ot.ocupado6=null;
      }

    }
    
  }

  guardar(){
    //CAMPOS REQUERIDOS
    if(this.ot.nombre_personal1 == null){
      this.alertService.error("Nombre de empleado requerido");
    }
    if(this.ot.horario1 == null){
      this.alertService.error("Horario de empleado requerido");
    }
    if(this.ot.horariofinal1 == null){
      this.alertService.error("Horario de empleado requerido");
    }
    if(this.ot.folio == null){
      this.alertService.error("Folio requerido");
    }
    if(this.ot.fecha == null){
      this.alertService.error("Fecha requerido");
    }
    if(this.ot.nombre_obra == null){
      this.alertService.error("Obra requerido");
    }
    if(this.ot.trabajo_realizado == null){
      this.alertService.error("Trabajo realizado requerido");
    }

    // FIN CAMPOS REQUERIDOS
    this.ot.fecha=moment(this.ot.fecha).format('YYYY-MM-DD');

    this.obraService.updateOt(this.ot).subscribe(data=>{
      this.alertService.presentToast('Guardado exitosamente');
      if(this.usuario['tuserint'] == 16 || this.usuario['tuserint'] == 24){
        this.router.navigate(['/activobrainfo']);
      }else{
        this.router.navigate(['/dashboard']);
      }
    }, error=>{
      this.alertService.error("Error al guardar");
    });

  }

}//fin clase
