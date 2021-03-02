import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from '../../interfaces/mantenimiento';
import { MttoserviceService } from '../../services/mttoservice.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rmantto',
  templateUrl: './rmantto.page.html',
  styleUrls: ['./rmantto.page.scss'],
})
export class RmanttoPage implements OnInit {
  mtto: Mantenimiento={
    equipo:null,
    tipo_servicio:null,
    lugar_mtto:null,
    quien_realiza:null,
    insumo_id1:null,
    insumo_id2:null,
    insumo_id3:null,
    insumo_id4:null,
    insumo_id5:null,
    quien_reporta:null,
    fecha:null
  }

  variable=1;
  bandera=0;
  buscarM1='';
  buscarM2='';
  buscarM3='';
  buscarM4='';
  buscarM5='';
  usuario={};

  tipo_equipo='vehiculos';
  datos$: Observable<any>;
  insumos1$: Observable<any>;
  insumos2$: Observable<any>;
  insumos3$: Observable<any>;
  insumos4$: Observable<any>;
  insumos5$: Observable<any>;


  constructor(private mttoService:MttoserviceService, private alertService: AlertService, 
    private router: Router, private authService: AuthService) { 
    this.datos$=mttoService.equipos();
    this.insumos1$=mttoService.insumos();
    this.insumos2$=mttoService.insumos();
    this.insumos3$=mttoService.insumos();
    this.insumos4$=mttoService.insumos();
    this.insumos5$=mttoService.insumos();

    this.authService.user().subscribe(
      user => {
        this.usuario = user;
        this.mtto.quien_reporta=this.usuario['name'];
      }
    );
  }

  ngOnInit() {
  }

  optionsFn( event , $param){
    this.mtto[$param]=event.detail.value;
  }
  //metodopara guardar
  onSubmit(){
    this.bandera=0;
    if(this.mtto.equipo == null){
      this.alertService.error("Equipo/Vehiculo requerido");
      this.bandera=1;
    }
    if(this.mtto.tipo_servicio == null){
      this.alertService.error("Tipo de servicio requerido");
      this.bandera=1;
    }
    if(this.mtto.lugar_mtto == null){
      this.alertService.error("Lugar requerido");
      this.bandera=1;
    }
    if(this.mtto.fecha == null){
      this.alertService.error("Fecha es requerida");
      this.bandera=1;
    }else{
      this.mtto.fecha=moment(this.mtto.fecha).format('YYYY-MM-DD');
    }
    if(this.mtto.lugar_mtto == 'Local'){
      if(this.mtto.insumo_id1 == null){
        this.bandera=1;
        this.alertService.error("Insumo requerido");
      }
    }
    if(this.mtto.lugar_mtto == 'Agencia'){
      this.mtto.insumo_id1=null;
      this.mtto.insumo_id2=null;
      this.mtto.insumo_id3=null;
      this.mtto.insumo_id4=null;
      this.mtto.insumo_id5=null;
    }
    if(this.bandera == 1){
      this.alertService.error("Algún campo es requerido");
    }else{
      this.mttoService.guardar(this.mtto).subscribe(data=>{
        this.alertService.presentToast('Guardado exitosamente');
        this.router.navigate(['/dashboard']);
      }, error=>{
        this.alertService.error("Error al guardar");
      });
    }
  }

  sumar(){
    if(this.variable < 6){
      this.variable=this.variable+1;
      console.log(this.variable);
    }
    
  }

  restar(){
    if(this.variable > 1){
      this.variable=this.variable-1;
    }
    console.log(this.variable);
  }

  onSearchChange1(event){
    this.buscarM1=event.detail.value;
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

}
