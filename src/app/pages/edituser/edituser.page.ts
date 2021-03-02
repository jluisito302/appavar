import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuario } from '../../interfaces/usuario';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.page.html',
  styleUrls: ['./edituser.page.scss'],
})
export class EdituserPage implements OnInit {
  id: any;
  usuario: Usuario={
    name: null,
    email: null,
    username: null,
    password: null,
    tipouser: null,
    tuserint: null,
    foto: null,
  }

  constructor(private activateRoute: ActivatedRoute, private usuarioService: UsuariosService,
    private router:Router, private alertService: AlertService) { 

    this.id = this.activateRoute.snapshot.params['id'];
    this.usuarioService.edituser(this.id).subscribe((user: Usuario)=>{
      this.usuario=user;
    }, error=>{
      console.log(error);
    });
  }

  ngOnInit() {
  }

  roles(event, $param){
    this.usuario[$param]=event.detail.value;
  }

  editUser(){
    this.usuarioService.updateUser(this.usuario).subscribe(data=>{
      this.alertService.presentToast("Actualizado correctamente...");
        this.router.navigate(['/users']);
      },error=>{
        console.log(error);
        this.alertService.error("Ocurrio un error");
    });
  }


}
