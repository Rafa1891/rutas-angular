import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',

})
export class Ejercicio3Component implements OnInit {

  @Input() lado1:number=NaN;
  @Input() lado2:number=NaN;
resultado:string="";

  perimetroRectangulo():void{
    this.resultado= "El perímetro del rectángulo es: "+String(2*this.lado1+2*this.lado2);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
