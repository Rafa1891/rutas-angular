import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',

})
export class Ejercicio5Component implements OnInit {

  @Input() presu:number=0;

  urgencia:number=0.37;
  pediatria:number=0.42;
  traumatologia:number=0.21;

  resultado:string="";

  calcularPartidas(){

    this.resultado="Para urgencias "+this.presu*this.urgencia+
    ", para pediatria "+this.presu*this.pediatria+" y para traumatología "+this.presu*this.traumatologia+" euros.";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
