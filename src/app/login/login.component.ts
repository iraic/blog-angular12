import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogrestService } from '../blogrest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //TypeScript
  titulo = "Inicio de sesión";
  user = "";
  pass = "";

  login() {
    this.blogrest.login(this.user, this.pass).subscribe(
      datos => {
        console.log(datos);
        this.respuesta(datos);
        this.rt.navigate(['/inicio']);
        this.msgbox.success("Bienvenido");
      },
      error => {
        console.log(error);
        this.msgbox.error("No se ha podido iniciar sesión")
      } );
  }
  respuesta(datos:any){
    this.blogrest.setCuenta(datos['user']['user'],datos['user']['nombre'],datos['user']['rol'],datos['token']);
    console.log("user:"+datos['user']['user']);
  }

  // respuestaError(error:any){
  //   console.log(error)
  // }
  constructor(private rt: Router, private blogrest: BlogrestService,
    private msgbox: ToastrService) { }

  ngOnInit(): void {
  }

}
