import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';


@NgModule({
  declarations:[
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component
  ],
  exports:[
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],

})
export class EjerciciosModule { }
