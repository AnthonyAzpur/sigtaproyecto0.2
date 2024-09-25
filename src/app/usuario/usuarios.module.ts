import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ListUsuariosComponent } from '../usuarios-list/pages/list-usuarios/list-usuarios.component';
import { MaterialModule } from '../material/material.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DialogUsuariosComponent } from '../usuarios-list/pages/dialog-usuarios/dialog-usuarios.component';
import { ActividadPageComponent } from '../usuarios-list/pages/actividad-page/actividad-page.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { ListExpComponent } from '../expediente/pages/list-exp/list-exp.component';
import { HomeExpComponent } from '../expediente/pages/home-exp/home-exp.component';
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
