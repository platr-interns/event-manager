// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { LoginComponent } from './pages/home/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'new-list', component: NewListComponent },
    { path: '', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '' } // Redirect to home page for unknown routes  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
