import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user={};
  id=0;
  usuario: Usuario={
    name: null,
    email: null,
    username: null,
    password: null,
    tipouser: null,
    tuserint: null,
    foto: null,
  }

  constructor(private authService: AuthService, private router: Router, 
    private usuarioService: UsuariosService,) { 
      this.authService.user().subscribe(
        user=> {
          this.user = user;
          console.log(user);
          this.id=this.user['id'];
          this.usuarioService.edituser(this.id).subscribe((user: Usuario)=>{
            this.usuario=user;
          }, error=>{
            console.log(error);
          });
        }
      );
      
  }

  ngOnInit() {
    this.authService.user().subscribe(
      user=> {
        this.user = user;
        console.log(user);
        this.id=this.user['id'];
        this.usuarioService.edituser(this.id).subscribe((user: Usuario)=>{
          this.usuario=user;
        }, error=>{
          console.log(error);
        });
      }
    );
  }

  doRefresh(event){
    setTimeout(()=>{
      this.authService.user().subscribe(
        user=> {
          this.user = user;
          console.log(user);
          this.id=this.user['id'];
          this.usuarioService.edituser(this.id).subscribe((user: Usuario)=>{
            this.usuario=user;
            event.target.complete();
          }, error=>{
            console.log(error);
          });
        }
      );
    }, 1500);
  }


  editDatos(){
    this.usuarioService.updateUser(this.usuario).subscribe(data=>{
      this.router.navigate(['/tabs/menu']);
    });
  }

  salir(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }



}// 