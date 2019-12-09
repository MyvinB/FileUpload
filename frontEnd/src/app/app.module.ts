import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationRouterModule } from './modules/authentication/authentication-router.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';



const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
