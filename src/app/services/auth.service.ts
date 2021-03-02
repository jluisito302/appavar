import { Injectable } from '@angular/core';
// SON LOS QUE IMPORTE
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  token:any;

  constructor(
    private http: HttpClient, private router: Router,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }

    // FUNCION DE LOGIN
  login(username: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/login',
      {username: username, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem("token", token)
          .then(
            () => {
              console.log('Token Guardado');
            },
            error => console.error(error)
          );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }

  //Funcion de logout
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get(this.env.API_URL + 'auth/logout', { headers: headers })
    .subscribe(data=>{
      this.storage.remove("token").then(()=>{
        //alert("delete");
      });
      this.storage.remove("usuario").then(()=>{
        //console.log('Borrado');
      });
      
      this.isLoggedIn = false;
      delete this.token;
      
    });
  }

  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token["token_type"]+" "+this.token["access_token"]
    });
    return this.http.get<User>(this.env.API_URL + 'auth/user', { headers: headers })
    .pipe(
      tap(user => {
        this.storage.setItem("usuario", JSON.stringify(user))
          .then(
            () => {
              console.log('Usuario Guardado');
              console.log(user);
            },
            error => console.error(error)
          );
        return user;
      })
    )
  }


  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if(this.token != null) {
          this.isLoggedIn=true;
        } else {
          this.isLoggedIn=false;
        }
      },
      error => {
        this.token = null;
        this.isLoggedIn=false;
      }
    );
  }




} // FINAL DE LA CLASE
