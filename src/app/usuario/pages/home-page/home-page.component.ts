import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  public sidebarItems = [
    { label: 'Listado Usuarios', icon: 'label', url: './list-usuario' },
  ]
}
