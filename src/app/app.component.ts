import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Agregue [ReactiveFormsModule] para activar los foemularios reactivos
  imports: [RouterOutlet,ReactiveFormsModule,NavbarComponent],
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
