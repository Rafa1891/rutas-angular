import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',

})
export class Ejercicio2Component implements OnInit {

  @Input() base:number=NaN;
  @Input() altura:number=NaN;
resultado:string="";

  areaTriangulo():void{
    this.resultado= "El área del triángulo es: "+String((this.base*this.altura)/2);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
