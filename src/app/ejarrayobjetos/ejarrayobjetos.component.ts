import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.model';

@Component({
  selector: 'app-ejarrayobjetos',
  templateUrl: './ejarrayobjetos.component.html',
  styleUrls: ['./ejarrayobjetos.component.css']
})
export class EjarrayobjetosComponent implements OnInit {

  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'Luis', apellidos: 'Borges Santamaria', ciudad: 'La Laguna'},
    {id: 2, nombre: 'Juan', apellidos: 'Garcia Perez', ciudad: 'La Orotava'},
    {id: 3, nombre: 'Manuel', apellidos: 'Mendoza Gil', ciudad: 'Granadilla'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
