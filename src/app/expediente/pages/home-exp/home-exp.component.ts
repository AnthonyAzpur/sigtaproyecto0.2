import { Component } from '@angular/core';

@Component({
  selector: 'app-home-exp',
  templateUrl: './home-exp.component.html',
  styleUrls: ['./home-exp.component.css']
})
export class HomeExpComponent {
  public sidebarItems = [
    { label: 'Man Acumulados', icon: 'assessment', url: 'man-acumulados' },
    { label: 'Por Hacer', icon: 'check_circle', url: './por-hacer' } // Segundo botón
  ];
}
