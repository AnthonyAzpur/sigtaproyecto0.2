import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListUsuariosComponent } from '../usuarios-list/pages/list-usuarios/list-usuarios.component';
import { DialogUsuariosComponent } from '../usuarios-list/pages/dialog-usuarios/dialog-usuarios.component';
import { HomeExpComponent } from '../expediente/pages/home-exp/home-exp.component';
import { MantAcumuladorComponent } from './pages/mant-acumulador/mant-acumulador.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    children:[
      {path: 'list-usuario', component: ListUsuariosComponent },
      {path: 'list-expediente', component: HomeExpComponent  },
      {path: 'list-expediente/:man-acumulados', component: MantAcumuladorComponent},
      {path: 'list-expediente/:por hacer', component: MantAcumuladorComponent},
      {path: 'list-usuario/:id', component: DialogUsuariosComponent },
      {path: '**',redirectTo: 'home' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
