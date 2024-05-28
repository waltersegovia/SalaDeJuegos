// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthRegisterService } from '../../services/auth-register.service';
//import { NavbarComponent } from '../../shared/navbar/navbar.component';
//import { NavbarComponent } from '../../shared/navbar/navbar.component';
//import { AuthRegisterService } from 'src/app/services/auth-register.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit{
  dataUser: any;

  constructor(private afAuth: AuthRegisterService, private router: Router) {
    
  }

  ngOnInit(): void {
    // this.afAuth
    //   .obtenerUserRegistrado()
    //   .then((user) => {
    //     if (user) {
    //       this.dataUser = user;
    //     } else {
    //       this.router.navigate(['/navbar']);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error al obtener el usuario autenticado:', error);
    //   });
  }
  
}
