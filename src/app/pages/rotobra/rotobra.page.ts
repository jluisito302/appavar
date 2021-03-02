import { Component, OnInit } from '@angular/core';
//IMPORTAR LA INTERFACE
import { OtAlbanileria } from '../../interfaces/otalbanileria';
//IMPORTAR EL SERVICIO
import { ObraService } from '../../services/obra.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import * as moment from 'moment';
import { AlertService } from 'src/app/services/alert.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-rotobra',
  templateUrl: './rotobra.page.html',
  styleUrls: ['./rotobra.page.scss'],
})
export class RotobraPage implements OnInit {
  usuario: {};
  imagen:any;
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

  obras$: Observable <any>;

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
  bandera=0;

  ot: OtAlbanileria={
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

  constructor(private obraService: ObraService, private camera:Camera, private http: HttpClient,
    private alertService: AlertService, private router: Router, private authService: AuthService) 
  { 

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
          
          this.ot.nombre_empleado=this.usuario['name'];
          this.ot.num_empleado=this.usuario['username'];
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
        this.ot.nombre_personal2='';
        this.ot.horario2='';
      }
      if(this.contPersonal == 2){
        this.ot.nombre_personal3='';
        this.ot.horario3='';
      }
      if(this.contPersonal == 3){
        this.ot.nombre_personal4='';
        this.ot.horario4='';
      }
      if(this.contPersonal == 4){
        this.ot.nombre_personal5='';
        this.ot.horario5='';
      }
      if(this.contPersonal == 5){
        this.ot.nombre_personal6='';
        this.ot.horario6='';
      }
      if(this.contPersonal == 6){
        this.ot.nombre_personal7='';
        this.ot.horario7='';
      }
      if(this.contPersonal == 7){
        this.ot.nombre_personal8='';
        this.ot.horario8='';
      }
      if(this.contPersonal == 8){
        this.ot.nombre_personal9='';
        this.ot.horario9='';
      }
      if(this.contPersonal == 9){
        this.ot.nombre_personal10='';
        this.ot.horario10='';
      }
      if(this.contPersonal == 10){
        this.ot.nombre_personal11='';
        this.ot.horario11='';
      }
      if(this.contPersonal == 11){
        this.ot.nombre_personal12='';
        this.ot.horario12='';
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
        this.ot.descripcion_material2='';
        this.ot.solicitado2='';
        this.ot.sobrante2='';
        this.ot.ocupado2='';
      }
      if(this.contMaterial == 2){
        this.ot.descripcion_material3='';
        this.ot.solicitado3='';
        this.ot.sobrante3='';
        this.ot.ocupado3='';
      }
      if(this.contMaterial == 3){
        this.ot.descripcion_material4='';
        this.ot.solicitado4='';
        this.ot.sobrante4='';
        this.ot.ocupado4='';
      }
      if(this.contMaterial == 4){
        this.ot.descripcion_material5='';
        this.ot.solicitado5='';
        this.ot.sobrante5='';
        this.ot.ocupado5='';
      }
      if(this.contMaterial == 5){
        this.ot.descripcion_material6='';
        this.ot.solicitado6='';
        this.ot.sobrante6='';
        this.ot.ocupado6='';
      }

    }
    
  }

  guardar(){
    //CAMPOS REQUERIDOS
    if(this.ot.area == null){
      this.alertService.error("Area requerido");
      this.bandera=1;
    }
    if(this.ot.nombre_obra == null){
      this.alertService.error("Nombre de la obra requerido");
      this.bandera=1;
    }
    if(this.ot.folio == null){
      this.alertService.error("Folio requerido");
      this.bandera=1;
    }
    if(this.ot.fecha == null){
      this.alertService.error("Fecha requerido");
      this.bandera=1;
    }

    if(this.bandera == 1){
      this.alertService.error("Campos requeridos");
    }else{
      this.ot.fecha=moment(this.ot.fecha).format('YYYY-MM-DD');

      this.obraService.guardar(this.ot).subscribe(data=>{
        if(data == 1){
          this.alertService.error("El folio ya existe");
        }else{
          this.alertService.presentToast('Guardado exitosamente');
          this.router.navigate(['/allotobra']);
        }
      }, error=>{
        this.alertService.error("Error al guardar");
      });
    }
  }


  galeria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      targetWidth: 500,
      targetHeight: 500
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imagen = 'data:image/jpeg;base64,' + imageData;

     }, (err) => {
      alert('error');
    });
    
  }

 

}//fin de la clase
