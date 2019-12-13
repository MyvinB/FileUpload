import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationRouterModule } from './modules/authentication/authentication-router.module';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { UploadModule } from './modules/upload/upload.module';



const appRoutes: Routes =[
  {
    path: '',
    redirectTo: '/upload',
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
    AuthenticationModule,
    UploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
