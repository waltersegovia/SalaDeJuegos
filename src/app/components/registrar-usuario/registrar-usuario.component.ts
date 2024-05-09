import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRegisterService } from '../../services/auth-register.service';
import { Router } from '@angular/router';
//import { collection } from 'firebase/firestore';
//import {AuthServices} from 

@Component({
  selector: 'app-registrar-usuario',
  standalone: true,
  // Agregue [ReactiveFormsModule] para activar los foemularios reactivos
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './registrar-usuario.component.html',
  styleUrl: './registrar-usuario.component.css'
})
export class RegistrarUsuarioComponent implements OnInit {

  registrarUsuario: FormGroup;
  //registrarUsuario = new FormControl('');

  constructor(private fb:FormBuilder, private authService:AuthRegisterService, private router: Router){
   this.registrarUsuario = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    repetirPassword: ['', Validators.required]
   })
  }

  ngOnInit(): void {
    
  }

  registrar(){
    const email=this.registrarUsuario.value.email;
    const password=this.registrarUsuario.value.password;
    const repetirPassword=this.registrarUsuario.value.repetirPassword;

    this.authService.registerUser(email,password)
     .then(()=>(
      this.router.navigate(["/login"])
     ))
     .catch((error) => {
      console.error('Error registering user:', error);
     }); 

   //console.log(this.registrarUsuario);
   console.log(email,password,repetirPassword);
  }

  
}
