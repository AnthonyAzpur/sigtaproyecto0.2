import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../usuario/services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogUsuariosComponent } from '../dialog-usuarios/dialog-usuarios.component';
import { ActividadPageComponent } from '../actividad-page/actividad-page.component';
import { Usuario } from '../../../usuario/interfaces/user.model';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  errorMessage: string = '';
  loading: boolean = true;

  constructor(private dataService: DataService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.loading = true;
    const filtro = {};
    this.dataService.listarUsuarios(filtro).subscribe(
      data => {
        this.usuarios = data;
        this.loading = false;
      },
      error => {
        this.errorMessage = 'No se pudieron cargar los usuarios. Intente más tarde.';
        this.loading = false;
      }
    );
  }

  editarHost(usuario: Usuario) {
    const dialogRef = this.dialog.open(DialogUsuariosComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar el resultado si es necesario
      }
    });
  }

  editarActividad(usuario: Usuario) {
    const dialogRef = this.dialog.open(ActividadPageComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar el resultado si es necesario
      }
    });
  }
}
