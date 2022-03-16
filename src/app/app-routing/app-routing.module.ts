import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Ejercicio1Component } from '../components/ejercicio1/ejercicio1.component';
import { Ejercicio2Component } from '../components/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from '../components/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from '../components/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from '../components/ejercicio5/ejercicio5.component';
import { AppComponent } from '../app.component';

const routes:Routes=[
  {
    path:'',
    component:AppComponent,
    pathMatch:'full'//home
  },
  {
    path:'ejercicio1',
    component:Ejercicio1Component,
  },
  {
    path:'ejercicio2',
    component:Ejercicio2Component,
  },
  {
    path:'ejercicio3',
    component:Ejercicio3Component,
  },
  {
    path:'ejercicio4',
    component:Ejercicio4Component,
  },
  {
    path:'ejercicio5',
    component:Ejercicio5Component,
  },
  {
    path:'*',
    redirectTo:'',//si entras en una ruta distinta te redirige
  }
];


@NgModule({
  declarations: []
  ,
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
RouterModule
  ]
})
export class AppRoutingModule { }
