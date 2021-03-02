import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mantenimiento } from '../../interfaces/mantenimiento';
import { MttoserviceService } from '../../services/mttoservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observarmtto',
  templateUrl: './observarmtto.page.html',
  styleUrls: ['./observarmtto.page.scss'],
})
export class ObservarmttoPage implements OnInit {
  id:any;
  mtto: Mantenimiento={
    id: null,
    equipo:null,
    tipo_servicio:null,
    lugar_mtto:null,
    quien_realiza:null,
    descripcion_mantenimiento:null,
    insumo_id1:null,
    insumo_id2:null,
    insumo_id3:null,
    insumo_id4:null,
    insumo_id5:null,
    insumo1:null,
    insumo2:null,
    insumo3:null,
    insumo4:null,
    insumo5:null,
    quien_reporta:null,
    fecha:null
  }

  constructor(private activateRoute: ActivatedRoute, private mttoService:MttoserviceService) { 
    this.id = this.activateRoute.snapshot.params['id'];
    //BUSCAMOS EN EL SERVER EL ID DE LA OBRA
    mttoService.editar(this.id).subscribe(data=>{
      this.mtto=data;
    });
  }

  ngOnInit() {
  }

}
