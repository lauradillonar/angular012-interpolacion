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

  // Calcular si el parámetro introducido es par o impar
  evenOrOdd = (num:number):string => {
    if (num % 2 === 0) {
      return num + ' es un número par';
    } else {
      return num + ' es un número impar';
    }
  }

  //Muestra un número aleatorio del 1 al 10
  numberRandom = () => (Math.floor(Math.random()*10)+1);
}
