import { Component } from '@angular/core';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent {
  public sidebarItems = [
    { label: 'Listado Usuarios', icon: 'label', url: './list-usuario' },
    { label: 'Listado Expedientes', icon: 'label', url: './list-expediente' },

  ]
}
