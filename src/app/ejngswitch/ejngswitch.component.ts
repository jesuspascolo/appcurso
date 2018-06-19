import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejngswitch',
  templateUrl: './ejngswitch.component.html',
  styleUrls: ['./ejngswitch.component.css']
})
export class EjngswitchComponent implements OnInit {

  jugadores: any[] = [
    { nombre: 'Earving Magic Jhonson', equipo: 'L.A. Lakers'},
    { nombre: 'Michael Jordan', equipo: 'Chicago Bulls'},
    { nombre: 'Larry Bird', equipo: 'Boston Celtics'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
