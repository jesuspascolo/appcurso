import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  capital: string;

  constructor() { }

  ngOnInit() {
  }

  setResultado() {
    this.capital = this.capital.toUpperCase();
    return this.capital === 'MADRID' ? true : false;
  }

}
