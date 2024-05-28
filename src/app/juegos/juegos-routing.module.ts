import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './pantalla/ahorcado/ahorcado.component';
import { MayorMenorComponent } from './pantalla/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './pantalla/preguntados/preguntados.component';
import { SnakeComponent } from './pantalla/snake/snake.component';
//import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { 
    path: '',
    children: [
      { path: 'ahorcado', component: AhorcadoComponent },
      { path: 'mayor-menor', component: MayorMenorComponent },
      { path: 'preguntados', component: PreguntadosComponent },
      { path: 'snake', component: SnakeComponent },
      { path: '**', redirectTo: 'ahorcado' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
