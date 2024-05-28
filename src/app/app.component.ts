import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';

// import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  // Agregue [ReactiveFormsModule] para activar los foemularios reactivos //,CommonModule,BrowserAnimationsModule
  imports: [RouterOutlet,ReactiveFormsModule,NavbarComponent,HttpClientModule,ToastrModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'SalaDeJuegos';
  title = 'saladejuegos';
  constructor(private router: Router) { }

  shouldShowNavbar(): boolean {
    const currentRoute = this.router.url;
    return !currentRoute.includes('/login') && !currentRoute.includes('/registrar-usuario');
  }
}
