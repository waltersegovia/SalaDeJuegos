import { Component } from '@angular/core';
//import { FirebaseService } from '../../services/firebase.service'; // collectionData, 

import { CommonModule } from '@angular/common';
//import { FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';  //Validators, FormBuilder, FormGroup, 
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { AuthRegisterService } from '../../services/auth-register.service';
import { Router, RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
//import { ReactiveFormsModule } from '@angular/forms';

//import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-login',
  standalone: true,
  // Agregue [ReactiveFormsModule] para activar los foemularios reactivos
  imports: [ CommonModule, FormsModule, ReactiveFormsModule,SpinnerComponent,RouterLink],//ReactiveFormsModule,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

//Dentro del componente creo el condtructor y el metodo
export class LoginComponent  {  //implements OnInit
 
  log : FormGroup;
  loading: boolean = false;

  public loginsCollection:any[] = [];
  public email:string ="";
  public password:string ="";

  //  constructor(private fb:FormBuilder){
  //     this.logins = this.fb.group({
  //     email: ['', Validators.required],
  //     password: ['', Validators.required],    
  //     })
  //  }

  constructor(private fire:Firestore, private authLogin:AuthRegisterService, private fb:FormBuilder, private router: Router) {//formBuilder: FormBuilder, private fire: FirebaseService
    // ngOnInit(): void {
    //   this.logins = this.formBuilder.group({
    //     email: ['', Validators.required],
    //     //email: ['', Validators.email],
    //     password: ['', Validators.required],  
    //   });
    //}
         this.log = this.fb.group({
         email: ['', Validators.required],
         password: ['', Validators.required],    
         })

    // onSubmit(): void {
    //   const formData = this.logins.value;
    //   this.fire.loginUser;
    // }

  } 



       //<button class="btn btn-primary btn-lg" (click)="login()" type="button">Ingresar</button>  viene del login html
      login(){
        // const email=this.log.value.email;
        // const password=this.log.value.password;
        const email=this.log.value.email;
        const fecha= new Date();
        const password=this.log.value.password;
        this.loading = true;
        console.log(email,fecha);
        
        //  let col = collection(this.fire, 'logins');
        //  addDoc(col, {"email":this.email, "password":this.password})

        let col = collection(this.fire, 'logins');
        addDoc(col, {email,fecha});
       
        // const email=this.logins.value.email;
        // const password=this.logins.value.password;
      
        // console.log("Entre");
        // this.fire.loginUser(email, password).then((data) => {console.log("ok")}).catch((error) => {console.log("error")})
         //console.log(email,password);
      
          this.authLogin.loginUser(email,password)
           .then(()=>(
            this.router.navigate(["/home"])
           ))
           .catch((error) => {
            this.loading = false; //console.error(this.loading, error);
           }); 
      
         //console.log(this.registrarUsuario);
         console.log(email,password);
        
      }

      quickAccess( email:string , password:string ) {
        this.log.setValue({
          email: email,
          password: password
        });
      }

}

//-------------------------------------------------




// export class RegistrarUsuarioComponent implements OnInit {
//   public loginsCollection:any[] = [];
//   public user:string = "";

//   //registrarUsuario: FormGroup;
//   //registrarUsuario = new FormControl('');

//   constructor(private fb:FormBuilder){
//    this.registrarUsuario = this.fb.group({
//     email: ['', Validators.required],
//     password: ['', Validators.required],
//     repetirPassword: ['', Validators.required]
//    })
//   }

//   ngOnInit(): void {
    
//   }

//   //constructor(private firestore: Firestore){

//   //}

//   registrar(){
//     const email=this.registrarUsuario.value.email;
//     const password=this.registrarUsuario.value.password;
//     const repetirPassword=this.registrarUsuario.value.repetirPassword;

//     //let col = collection(this.firestore, 'logins');


//    //console.log(this.registrarUsuario);
//    console.log(email,password,repetirPassword);
//   }
// }
