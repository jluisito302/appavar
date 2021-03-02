import { Component, OnInit } from '@angular/core';
import { DepartamentosService } from '../../services/departamentos.service';
import { Observable } from 'rxjs';
//IMPORTAR LA INTERFACE
import { ReAbonos } from '../../interfaces/regabonos';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regabonos',
  templateUrl: './regabonos.page.html',
  styleUrls: ['./regabonos.page.scss'],
})
export class RegabonosPage implements OnInit {
  array:Observable<any>;
  model: ReAbonos={
    id_proveedor: null,
    nremision_factura: null,
    importe: null,
    observaciones: null
  };
  constructor(private departamentos:DepartamentosService, private alert: AlertService,
              private router:Router) { }

  ngOnInit() {
    this.array=this.departamentos.provcreditos();
  }

  save(){
    if (this.model.id_proveedor == null && this.model.importe == null) {
      this.alert.error("Completa los campos obliagtorios * ");
    }else{
      this.departamentos.saveAbonos(this.model).subscribe(data=>{
        if(data == 'Mal'){
          this.alert.error("El monto que ingresaste supera la cantidad del credito al proveedor");
        }else{
          this.alert.presentToast("Guardado correctamente ...");
          this.router.navigate(['/histabonos']);
        }
      }, error=>{

      });
    }
  }
}
