import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'', redirectTo: '/login', pathMatch: "full"},
    {path:'login', component: LoginComponent},
    {path:'registrar-usuario', component: RegistrarUsuarioComponent},
    {path:'verificar-correo', component: VerificarCorreoComponent},
    {path:'recuperar-password', component: RecuperarPasswordComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'home', component: HomeComponent},
    {path:'**', redirectTo: '/login', pathMatch: "full"}
];

// imports:[
//   ReactiveFormsModule
// ]