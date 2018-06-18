import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//Exportamos nuestro componente para poder usarlo en otras plantillas.
export class AppComponent {
  destino: string = 'Universo';
}
