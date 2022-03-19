import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo de Interpolación';
  numero1 = 1;
  numero2 = 2;

  programador = ({
    nombre: "Anders Hejisberg",
    lenguajes: ['C#', 'Delphi', 'Pascal', 'TypeScript']
  });
}
