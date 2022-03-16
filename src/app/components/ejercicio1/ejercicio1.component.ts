import { Component, EventEmitter, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',

})
export class Ejercicio1Component implements OnInit {

  @Input() num1:number=NaN;
  @Input() num2:number=NaN;
resultado:string="";


  sumar():void{
    this.resultado= "El resultado es: "+String(this.num1+this.num2);

   }

   restar():void{
    this.resultado= "El resultado es: "+String(this.num1-this.num2);

   }

   multiplicar():void{
    this.resultado= "El resultado es: "+String(this.num1*this.num2);

   }

   dividir():void{
    if(this.num2==0){
      this.resultado="División por 0";

   }else{
    this.resultado="El resultado es: "+String(this.num1/this.num2);

   }
   }
  constructor() { }

  ngOnInit(): void {
  }

}
