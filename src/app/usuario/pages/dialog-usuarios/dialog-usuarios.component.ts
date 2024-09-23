import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../list-usuarios/user.model';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.css']
})
export class DialogUsuariosComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  guardarCambios(): void {
    this.dialogRef.close(this.data);
  }
}
