import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
//import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

//import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { ChatComponent } from './components/chat/chat.component';
//import { HttpClientModule } from '@angular/common/http';
//import { AhorcadoComponent } from './juegos/pantalla/ahorcado/ahorcado.component';
//import { NavbarComponent } from './shared/navbar/navbar.component';

export const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch: "full"},
    {path:'login', component: LoginComponent},
    {path:'registrar-usuario', component: RegistrarUsuarioComponent},
    {path:'verificar-correo', component: VerificarCorreoComponent},
    //{path:'recuperar-password', component: RecuperarPasswordComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'home', component: HomeComponent},
    {path:'quien-soy', component: QuienSoyComponent},
    {path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then((m) => m.JuegosModule)},
    {path:'chat', component: ChatComponent},
    //{ path: 'ahorcado', component: AhorcadoComponent},
    //{path:'navbar', component: NavbarComponent},
    {path:'**', redirectTo: '/login', pathMatch: "full"}
];

// imports:[
//   HttpClientModule
// ]

