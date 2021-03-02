import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.page.html',
  styleUrls: ['./adduser.page.scss'],
})
export class AdduserPage implements OnInit {
  usuario: Usuario={
    name: null,
    email: null,
    username: null,
    password: null,
    tipouser: null,
    tuserint: null,
    foto: null,
  }
  bandera=0;
  constructor(private usuarioService: UsuariosService,private router:Router,
     private alertService: AlertService) { 

  }

  ngOnInit() {
    
  }

  add(){
    if (this.usuario.name == null || this.usuario.password == null || this.usuario.tuserint == null) {
      this.bandera=1;
    }

    if (this.bandera == 1) {
      this.alertService.error("Campos obligatorios...");
    }else{
      this.usuarioService.addUser(this.usuario).subscribe(data=>{
        this.alertService.presentToast("Inertado correctamente...");
          this.router.navigate(['/users']);
        },error=>{
          console.log(error);
          this.alertService.error("Ocurrio un error");
      });
    }
  }



}
