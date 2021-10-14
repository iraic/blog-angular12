import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const URL:string = "http://localhost/blogrest/public/";

@Injectable({
  providedIn: 'root'
})
export class BlogrestService {
  private cuenta = {user:'', nombre:'', rol:'', token:''};

  setCuenta(user:string, nombre:string, rol:string, token:string){
    this.cuenta.user = user;
    this.cuenta.nombre = nombre;
    this.cuenta.rol = rol;
    this.cuenta.token = token;
    //permite almacenar datos en el navegador
    localStorage.setItem('user', user)
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('rol', rol)
    localStorage.setItem('token', token)
  }

  getCuenta(){
    //this.cuenta.user =(localStorage.getItem('user') != null)? localStorage.getItem('user') : '';
  }
  constructor(private http: HttpClient) { }

  login(user:string, pass:string){
    return this.http.get(URL + "login/" + user + "/" + pass)
  }

}
