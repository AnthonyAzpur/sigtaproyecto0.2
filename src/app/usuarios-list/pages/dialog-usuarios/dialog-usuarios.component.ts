import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from '../../../usuario/interfaces/user.model';
import { DataService } from '../../../usuario/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dialog-usuarios',
  templateUrl: './dialog-usuarios.component.html',
  styleUrls: ['./dialog-usuarios.component.css']
})
export class DialogUsuariosComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogUsuariosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    private dataService: DataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  mostrarAlerta() {
    Swal.fire({
      title: '¡Éxito!',
      text: 'La operación se realizó correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  }

  guardarCambios(): void {
    if (this.data.idsigma && this.data.dhostname) {
      this.dataService.updateHost(this.data.idsigma, this.data.dhostname).subscribe(
        response => {
          this.mostrarAlerta();
          this.dialogRef.close(this.data);

        },
        error => {
          console.error('Error al actualizar el host (dialog)', error);
        }
      );
    } else {
      console.error('Faltan parámetros para actualizar el host');
    }
  }
}
