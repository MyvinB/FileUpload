import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from './authentication.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AuthenticationRouterModule} from './authentication-router.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthenticationRouterModule,
    ReactiveFormsModule
  ],
  providers:[AuthenticationService],
  exports: [
  AuthenticationRouterModule
  ]
})
export class AuthenticationModule { }
