import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../list-usuarios/user.model';

@Component({
  selector: 'app-actividad-page',
  templateUrl: './actividad-page.component.html',
  styleUrls: ['./actividad-page.component.css']
})
export class ActividadPageComponent {
  constructor(
    public dialogRef: MatDialogRef<ActividadPageComponent>, // Cambia aquí
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCambios(): void {
    this.dialogRef.close(this.data);
  }
}
