import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

//import { NgModule } from '@angular/core';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
// import { ReactiveFormsModule } from '@angular/forms';
// import { AppComponent } from './app.component';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"saladejuegos-44061","appId":"1:146186588869:web:7f6d69119c9f678d3896ac","storageBucket":"saladejuegos-44061.appspot.com","apiKey":"AIzaSyAWh07VekAEWuqK5UsNMWSzhV73Z8VMorQ","authDomain":"saladejuegos-44061.firebaseapp.com","messagingSenderId":"146186588869"}))), 
  importProvidersFrom(provideAuth(() => getAuth())), 
  importProvidersFrom(provideFirestore(() => getFirestore()))]
};

// @NgModule({
//   declarations: [
//     NgModule
//   ]
// })

// imports:[
//   ReactiveFormsModule
// ]