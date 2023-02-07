import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {


  nombreLower: string = 'alex'
  nombreUpper: string = 'ALEX'
  nombreCompleto: string = 'AlEx CrUZ'


  fecha: Date = new Date(); // el dia de hoy
}
