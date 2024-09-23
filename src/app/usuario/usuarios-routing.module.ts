import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListUsuariosComponent } from './pages/list-usuarios/list-usuarios.component';
import { DialogUsuariosComponent } from './pages/dialog-usuarios/dialog-usuarios.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    children:[
      {path: 'list-usuario', component: ListUsuariosComponent },
      {path: 'list-usuario/:id', component: DialogUsuariosComponent },
      {path: '**',redirectTo: 'list' },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
