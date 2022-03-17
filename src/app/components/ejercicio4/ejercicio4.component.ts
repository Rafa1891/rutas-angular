import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from 'src/app/interfaces/empleado.interface';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './Ejercicio4.component.html',

})
export class Ejercicio4Component implements OnInit {

  @Input() empleados:Empleado[]=[];


  @Input() nuevo:Empleado={
    nombre:"",
    sueldo:0
  }

resultado:string="";
mayor:number=0;

  mayorSueldo():void{
    for(let i=0;i<this.empleados.length;i++){

      if(this.empleados[i].sueldo>this.mayor){
        this.mayor=this.empleados[i].sueldo;

      }
    }

    this.resultado= "El mayor sueldo es: "+this.mayor;
  }

  mostrarNombres():void{
    for(let i=0;i<this.empleados.length;i++){
     this.resultado=this.empleados[i].nombre;
    }

  }

  agregarEmpleado():void{
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
  this.empleados.push(this.nuevo);
  for(let i=0;i<this.empleados.length;i++){
  console.log(this.empleados[i]);
  }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
