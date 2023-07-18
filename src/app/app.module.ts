import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewListComponent } from './pages/new-list/new-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/home/login/login.component';
// Import other modules and components

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewListComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Add the AppRoutingModule here
    // Add other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
