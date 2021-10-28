import { Component, OnInit } from '@angular/core';
import { BlogrestService } from '../blogrest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  topics:any;
  tema='';
  temaEdit:any;


  constructor(private blogrest: BlogrestService, private msgbox: ToastrService) { }

  ngOnInit(): void {
    //console.log(this.blogrest.getCuenta().user)
    this.blogrest.getCuenta()
    this.llenarTabla();
  }

  llenarTabla(){
    this.blogrest.topics().subscribe(
      datos => {
        console.log(datos);
        this.topics = datos;
      },
      error => {
        console.log(error);
      }
    );
  }

  agregar(){
    this.blogrest.addTopic(this.tema).subscribe(
      datos => {
        this.llenarTabla();
      }
    );
  }

  editarTema(topic){
    this.temaEdit = JSON.parse(JSON.stringify(topic));
  }

  guardarCambios(){
    this.blogrest.editTopic(this.temaEdit).subscribe(
      datos => {
        this.msgbox.success("Modificacion correcta");
        this.llenarTabla();
      },
      error => {
        this.msgbox.error("Error al modiciar");
        console.log(error);
      }
    );
  }

  eliminarTema(){
    this.blogrest.delTopic(this.temaEdit).subscribe(
      datos => {
        this.msgbox.success("Eliminado correctamente");
        this.llenarTabla();
      },
      error => {
        this.msgbox.error("Error al eliminar");
        console.log(error);
      }
    );
  }

}
