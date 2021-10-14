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
        //this.blogrest.setCuenta(datos['user']['user']);
        this.rt.navigate(['/inicio']);
        this.msgbox.success("Bienvenido");
      },
      error => {
        console.log(error);
        this.msgbox.error("No se ha podido iniciar sesión")
      } );
  }
  // respuesta(datos:any){
  //   console.log(datos['auth']);
  //   this.rt.navigate(['/inicio']);
  // }

  // respuestaError(error:any){
  //   console.log(error)
  // }
  constructor(private rt: Router, private blogrest: BlogrestService,
    private msgbox: ToastrService) { }

  ngOnInit(): void {
  }

}
