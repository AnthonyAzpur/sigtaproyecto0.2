import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListUsuariosComponent } from './pages/list-usuarios/list-usuarios.component';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DialogUsuariosComponent } from './pages/dialog-usuarios/dialog-usuarios.component';
import { ActividadPageComponent } from './pages/actividad-page/actividad-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ListExpComponent } from './pages/list-exp/list-exp.component';
import { HomeExpComponent } from './pages/home-exp/home-exp.component';
import { MantAcumuladorComponent } from './pages/mant-acumulador/mant-acumulador.component';


@NgModule({
  declarations: [
    ListUsuariosComponent,
    HomePageComponent,
    DialogUsuariosComponent,
    ActividadPageComponent,
    MenuPageComponent,
    ListExpComponent,
    HomeExpComponent,
    MantAcumuladorComponent,


  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
  ]
})
export class UsuariosModule { }
