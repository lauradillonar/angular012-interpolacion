import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejemplo de Interpolación';

  programador = ({
    nombre: "Anders Hejisberg",
    lenguajes: ['C#', 'Delphi', 'Pascal', 'TypeScript']
  });
}
