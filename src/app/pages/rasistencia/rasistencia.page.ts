import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AlertService } from 'src/app/services/alert.service';
import { BarcodeScannerOptions, BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-rasistencia',
  templateUrl: './rasistencia.page.html',
  styleUrls: ['./rasistencia.page.scss'],
})
export class RasistenciaPage implements OnInit {
  user={};
  id=0;
  usuario={};
  user1={
    username:null,
  };

  datocodificado: any;
  datoscaneado: {};

  constructor(private authService: AuthService, private router: Router, private alert:AlertService,
    private usuarioService: UsuariosService, private loginService:LoginService, private barcodeScanner: BarcodeScanner) { 

      this.authService.user().subscribe(
        user=> {
          this.user = user;
          this.id=this.user['id'];
          this.usuarioService.edituser(this.id).subscribe(user=>{
            this.usuario=user;
            console.log(this.usuario);
          }, error=>{
            console.log(error);
          });
        }
      );

  }

  ngOnInit() {
  }

  onClick(){
    this.user1['username']=this.usuario['username'];

    this.barcodeScanner.scan().then(barcodeData => {
      this.datoscaneado = barcodeData;

      this.loginService.asistencia(this.user1).subscribe(data=>{
        if (data == 1) {
          this.alert.error('Error al guardar');
        }
        if (data == 'Entrada') {
          this.alert.presentToast('Entrada registrada');
          this.router.navigate(['/asistencias']);
        }
        if (data == 'Salida') {
          this.alert.presentToast('Salida registrada');
          this.router.navigate(['/asistencias']);
        }
      },error=>{
        console.log(error);
      });

    })
    .catch(err => {
      console.log("Error", err);
    });
    
    
  }

}
