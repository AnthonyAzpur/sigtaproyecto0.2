import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from './list-usuarios/user.model'; // Asegúrate de que la ruta sea correcta

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/listar-usuarios'; // Cambia a tu servidor Express

  constructor(private http: HttpClient) {}

  listarUsuarios(filtro: any = {}): Observable<Usuario[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer your_token_here', // Reemplaza con tu token
      'Content-Type': 'application/json'
    });

    return this.http.post<Usuario[]>(this.apiUrl, filtro, { headers })
      .pipe(
        catchError(error => {
          console.error('Error al listar usuarios', error);
          return throwError(error);
        })
      );
  }

}
