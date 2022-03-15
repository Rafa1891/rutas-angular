import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from '../components/componente1/componente1.component';
import { Componente2Component } from '../components/componente2/componente2.component';
import { Componente3Component } from '../components/componente3/componente3.component';
import { Componente4Component } from '../components/componente4/componente4.component';
import { Componente5Component } from '../components/componente5/componente5.component';
import { AppComponent } from '../app.component';

const routes:Routes=[
  {
    path:'',
    component:AppComponent,
    pathMatch:'full'//home
  },
  {
    path:'componente1',
    component:Componente1Component,
  },
  {
    path:'componente2',
    component:Componente2Component,
  },
  {
    path:'componente3',
    component:Componente3Component,
  },
  {
    path:'componente4',
    component:Componente4Component,
  },
  {
    path:'componente5',
    component:Componente5Component,
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
