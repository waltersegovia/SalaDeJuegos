import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient, HttpClientModule } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
//import { AppComponent } from '../app.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    ToastrModule,
    HttpClientModule
  ]
})
export class JuegosModule { }
//***************************************************************************************************** */
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// import { JuegosRoutingModule } from './juegos-routing.module';
// import { AhorcadoComponent } from './pantalla/ahorcado/ahorcado.component';
// import { MayorMenorComponent } from './pantalla/mayor-menor/mayor-menor.component';
// import { AhorcadoDibujarComponent } from './componentes/ahorcado-dibujar/ahorcado-dibujar.component';
// import { AhorcadoPreguntaComponent } from './componentes/ahorcado-pregunta/ahorcado-pregunta.component';
// import { AhorcadoKeyboardComponent } from './componentes/ahorcado-keyboard/ahorcado-keyboard.component';
// import { PreguntadosComponent } from './pantalla/preguntados/preguntados.component';
// import { SnakeComponent } from './pantalla/snake/snake.component';
// import { ModalComponent } from './componentes/modal/modal.component';


// @NgModule({
//   declarations: [
//     AhorcadoComponent,
//     MayorMenorComponent,
//     AhorcadoDibujarComponent,
//     AhorcadoPreguntaComponent,
//     AhorcadoKeyboardComponent,
//     PreguntadosComponent,
//     SnakeComponent,
//     ModalComponent
//   ],
//   imports: [
//     CommonModule,
//     JuegosRoutingModule,
//   ]
// })
// export class JuegosModule { }
