import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {
  //i18n select
  nombre: string = 'Alex';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nplural

  clientes: string[] = ['Maria', 'Alex', 'Fernando', 'Lucía']

  clientesMap = {
    '=0': 'no hay clientes esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
  cambiarCliente() {
    this.nombre = 'Maria';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue pipe

  persona = {
    nombre: 'Alejandro',
    edad: 30,
    direccion: 'Salamanca, España'
  }

  //JSON Pipe

  heroes = [
    {
      nombre : 'Superman',
      vuela : true
    },
    {
      nombre : 'Batman',
      vuela : false
    },
    {
      nombre : 'Robin',
      vuela : false
    },

  ]

//Async Pipe
miObservable = interval(1000); //0,1,2,3,4,5...
}
