import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from './authentication.service';
import { LoginComponent } from './components/login/login.component';
import {AuthenticationRouterModule} from './authentication-router.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRouterModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers:[AuthenticationService, ErrorHandler],
  exports: [
  AuthenticationRouterModule
  ]
})
export class AuthenticationModule { }
