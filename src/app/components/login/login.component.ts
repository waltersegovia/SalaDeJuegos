import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { AuthRegisterService } from '../../services/auth-register.service';
import { Router, RouterLink } from '@angular/router';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { ToastrService } from 'ngx-toastr';
import { FireErrorService } from '../../services/fire-error.service';
import { LogService } from '../../services/log.service';
import { LogUser } from '../../interfaces/LogUser';


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
  //passwordValue: boolean = true;
  UserValue: boolean = false;

  public loginsCollection:any[] = [];
  public email:string ="";
  public password:string ="";

  constructor(
    private authUser: AuthRegisterService,
    private toastr: ToastrService,
    private fireError: FireErrorService,
    private logService: LogService,private fire:Firestore, private authLogin:AuthRegisterService, private fb:FormBuilder, private router: Router) {//formBuilder: FormBuilder, private fire: FirebaseService

         this.log = this.fb.group({
         email: ['', Validators.required],
         password: ['', Validators.required],    
         })

         this.log = this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]],
        });

  } 



       //<button class="btn btn-primary btn-lg" (click)="login()" type="button">Ingresar</button>  viene del login html
      login(){
        const email=this.log.value.email;
        const fecha= new Date();
        const password=this.log.value.password;
        this.loading = true;
        console.log(email,fecha);
      
        let col = collection(this.fire, 'logins');
        addDoc(col, {email,fecha});
      
        //   this.authLogin.loginUser(email,password)
        //    .then(()=>(
        //     this.router.navigate(["/home"])
        //    ))
      
          this.authLogin.loginUser(email,password).then((user)=>{
            const fechaIngreso = new Date().toLocaleString() || '';
            const loguser: LogUser = {
              usuario: email,
              fechaIngreso: fechaIngreso,
            };
            this.logService.logRegisterUser(loguser);
            this.router.navigate(['/home']);
          })
           .catch((error) => {
            this.loading = false; //console.error(this.loading, error);
            this.toastr.error(this.fireError.codeError(error.code), 'Error');
           }); 
         console.log(email,password);
        
      }

      // passwordError(){
      //   const email=this.log.value.email;
      //   const password=this.log.value.password;
      //   this.passwordValue = true;
      //   this.authLogin.loginUser(email,password)
      //   .then(()=>(
      //    this.router.navigate(["/home"])
      //   ))
      //   .catch((error) => {
      //    this.passwordValue = false; //console.error(this.loading, error);
      //   }); 
      // }


      quickAccess( email:string , password:string ) {
        this.log.setValue({
          email: email,
          password: password
        });
      }

}

