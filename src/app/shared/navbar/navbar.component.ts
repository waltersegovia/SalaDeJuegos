// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.css'
// })
// export class NavbarComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthRegisterService } from '../../services/auth-register.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  dataUser: any;
  constructor(private afAuth: AuthRegisterService, private router: Router) {}

  logout() {
    this.afAuth.logout().then(() => {
      this.router.navigate(['/auth']);
    });
  }
  ngOnInit(): void {
    this.afAuth
      .obtenerUserRegistrado()
      .then((user) => {
        if (user) {
          this.dataUser = user;
        } else {
          this.router.navigate(['/auth']);
        }
      })
      .catch((error) => {
        console.error('Error al obtener el usuario autenticado:', error);
      });
  }
}